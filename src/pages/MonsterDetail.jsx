import { useParams } from "react-router-dom";
import { useResource } from "../hooks/useResource";
import DetailLayout from "../components/layout/DetailLayout";
import DetailField from "../components/ui/DetailField";
import { abilityModifier } from "../lib/helpers";

// Детальная страница монстра: /monsters/:index
function MonsterDetail() {
  const { index } = useParams();
  const { data: monster, isLoading, isError, error } = useResource("monsters", index);

  // Подзаголовок: размер, тип и мировоззрение.
  const subtitle = monster
    ? [monster.size, monster.type, monster.alignment].filter(Boolean).join(", ")
    : null;

  // Скорость в API — объект { walk, fly, ... }; собираем в строку.
  const speed = monster?.speed
    ? Object.entries(monster.speed)
        .map(([type, value]) => `${type}: ${value}`)
        .join(", ")
    : null;

  // Шесть базовых характеристик для сетки.
  const abilities = monster
    ? [
        { label: "СИЛ", score: monster.strength },
        { label: "ЛОВ", score: monster.dexterity },
        { label: "ТЕЛ", score: monster.constitution },
        { label: "ИНТ", score: monster.intelligence },
        { label: "МДР", score: monster.wisdom },
        { label: "ХАР", score: monster.charisma },
      ]
    : [];

  return (
    <DetailLayout
      title={monster?.name}
      subtitle={subtitle}
      isLoading={isLoading}
      isError={isError}
      error={error}
	favoriteItem={monster ? { resource: "monsters", index: monster.index, name: monster.name } : null}
    >
      {monster && (
        <>
          {/* Боевые параметры */}
          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
            <DetailField label="Класс доспеха" value={monster.armor_class?.[0]?.value} />
            <DetailField label="Хиты" value={monster.hit_points} />
            <DetailField label="Кость хитов" value={monster.hit_dice} />
            <DetailField label="Скорость" value={speed} />
            <DetailField label="Опасность" value={monster.challenge_rating} />
            <DetailField label="Опыт" value={monster.xp} />
          </dl>

          {/* Характеристики со значением и модификатором */}
          <div className="mt-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
              Характеристики
            </h3>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
              {abilities.map((a) => (
                <div
                  key={a.label}
                  className="rounded-lg border border-slate-800 bg-slate-800/40 px-3 py-2 text-center"
                >
                  <div className="text-xs text-slate-500">{a.label}</div>
                  <div className="font-bold text-slate-100">{a.score}</div>
                  <div className="text-xs text-emerald-400">
                    {abilityModifier(a.score)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Особые умения */}
          {monster.special_abilities?.length > 0 && (
            <div className="mt-6 space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Особые умения
              </h3>
              {monster.special_abilities.map((ability, i) => (
                <div key={i} className="text-slate-300">
                  <span className="font-semibold text-slate-100">{ability.name}. </span>
                  {ability.desc}
                </div>
              ))}
            </div>
          )}

          {/* Действия */}
          {monster.actions?.length > 0 && (
            <div className="mt-6 space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Действия
              </h3>
              {monster.actions.map((action, i) => (
                <div key={i} className="text-slate-300">
                  <span className="font-semibold text-slate-100">{action.name}. </span>
                  {action.desc}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </DetailLayout>
  );
}

export default MonsterDetail;