import { useParams } from "react-router-dom";
import { useResource } from "../hooks/useResource";
import DetailLayout from "../components/layout/DetailLayout";
import DetailField from "../components/ui/DetailField";
import { joinList } from "../lib/helpers";

// Детальная страница расы: /races/:index
function RaceDetail() {
  const { index } = useParams();
  const { data: race, isLoading, isError, error } = useResource("races", index);

  // Бонусы характеристик: массив { ability_score, bonus } -> "СИЛ +2, ..."
  const abilityBonuses = race
    ? joinList(
        (race.ability_bonuses || []).map(
          (b) => `${b.ability_score?.name} +${b.bonus}`
        )
      )
    : null;

  // Языки — массив объектов-ссылок.
  const languages = race
    ? joinList((race.languages || []).map((l) => l.name))
    : null;

  return (
    <DetailLayout
      title={race?.name}
      subtitle={race ? race.size : null}
      isLoading={isLoading}
      isError={isError}
      error={error}
      favoriteItem={race ? { resource: "races", index: race.index, name: race.name } : null}
    >
      {race && (
        <>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
            <DetailField label="Скорость" value={race.speed} />
            <DetailField label="Размер" value={race.size} />
            <DetailField label="Бонусы характеристик" value={abilityBonuses} />
            <DetailField label="Языки" value={languages} />
          </dl>

          {/* Описание возраста, мировоззрения, размера — отдельные текстовые поля */}
          {race.age && (
            <div className="mt-6 text-slate-300">
              <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-slate-400">
                Возраст
              </h3>
              <p className="leading-relaxed">{race.age}</p>
            </div>
          )}

          {race.alignment && (
            <div className="mt-4 text-slate-300">
              <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-slate-400">
                Мировоззрение
              </h3>
              <p className="leading-relaxed">{race.alignment}</p>
            </div>
          )}

          {/* Расовые черты */}
          {race.traits?.length > 0 && (
            <div className="mt-6">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
                Черты
              </h3>
              <p className="leading-relaxed text-slate-300">
                {joinList(race.traits.map((t) => t.name))}
              </p>
            </div>
          )}
        </>
      )}
    </DetailLayout>
  );
}

export default RaceDetail;