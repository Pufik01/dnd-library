import { useParams } from "react-router-dom";
import { useResource } from "../hooks/useResource";
import DetailLayout from "../components/layout/DetailLayout";
import DetailField from "../components/ui/DetailField";
import { joinList } from "../lib/helpers";

// Детальная страница класса: /classes/:index
function ClassDetail() {
  const { index } = useParams();
  const { data: dndClass, isLoading, isError, error } = useResource("classes", index);

  // Спасброски — массив объектов-ссылок; берём названия.
  const savingThrows = dndClass
    ? joinList((dndClass.saving_throws || []).map((s) => s.name))
    : null;

  // Владения — то же самое.
  const proficiencies = dndClass
    ? joinList((dndClass.proficiencies || []).map((p) => p.name))
    : null;

  return (
    <DetailLayout
      title={dndClass?.name}
      subtitle={dndClass ? `Кость хитов: d${dndClass.hit_die}` : null}
      isLoading={isLoading}
      isError={isError}
      error={error}
      favoriteItem={dndClass ? { resource: "classes", index: dndClass.index, name: dndClass.name } : null}
    >
      {dndClass && (
        <>
          <dl className="grid grid-cols-1 gap-y-4 sm:grid-cols-2">
            <DetailField label="Спасброски" value={savingThrows} />
            <DetailField label="Кость хитов" value={`d${dndClass.hit_die}`} />
          </dl>

          {/* Владения — длинный список, отдельным блоком */}
          {proficiencies && (
            <div className="mt-6">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
                Владения
              </h3>
              <p className="leading-relaxed text-slate-300">{proficiencies}</p>
            </div>
          )}

          {/* Стартовое снаряжение */}
          {dndClass.starting_equipment?.length > 0 && (
            <div className="mt-6">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
                Стартовое снаряжение
              </h3>
              <ul className="list-inside list-disc space-y-1 text-slate-300">
                {dndClass.starting_equipment.map((item, i) => (
                  <li key={i}>
                    {item.equipment?.name}
                    {item.quantity > 1 && ` ×${item.quantity}`}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </DetailLayout>
  );
}

export default ClassDetail;