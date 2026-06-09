import { useParams } from "react-router-dom";
import { useResource } from "../hooks/useResource";
import DetailLayout from "../components/layout/DetailLayout";
import DetailField from "../components/ui/DetailField";
import { joinList, refName } from "../lib/helpers";

// Детальная страница заклинания: /spells/:index
function SpellDetail() {
  const { index } = useParams();
  const { data: spell, isLoading, isError, error } = useResource("spells", index);

  const subtitle = spell
    ? spell.level === 0
      ? "Заговор"
      : `Заклинание ${spell.level} уровня`
    : null;

  return (
    <DetailLayout
      title={spell?.name}
      subtitle={subtitle}
      isLoading={isLoading}
      isError={isError}
      error={error}
      // Данные для кнопки избранного (показывается после загрузки).
      favoriteItem={
        spell ? { resource: "spells", index: spell.index, name: spell.name } : null
      }
    >
      {spell && (
        <>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
            <DetailField label="Школа" value={refName(spell.school)} />
            <DetailField label="Время накладывания" value={spell.casting_time} />
            <DetailField label="Дистанция" value={spell.range} />
            <DetailField label="Длительность" value={spell.duration} />
            <DetailField label="Компоненты" value={joinList(spell.components)} />
            <DetailField
              label="Концентрация"
              value={spell.concentration ? "Да" : "Нет"}
            />
            <DetailField label="Ритуал" value={spell.ritual ? "Да" : "Нет"} />
            <DetailField
              label="Классы"
              value={joinList((spell.classes || []).map((c) => c.name))}
            />
          </dl>

          {spell.desc?.length > 0 && (
            <div className="mt-6 space-y-3 text-slate-300">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Описание
              </h3>
              {spell.desc.map((paragraph, i) => (
                <p key={i} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {spell.higher_level?.length > 0 && (
            <div className="mt-6 space-y-3 text-slate-300">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                На высоких уровнях
              </h3>
              {spell.higher_level.map((paragraph, i) => (
                <p key={i} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </>
      )}
    </DetailLayout>
  );
}

export default SpellDetail;