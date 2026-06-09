import { useParams } from "react-router-dom";
import { useResource } from "../hooks/useResource";
import DetailLayout from "../components/layout/DetailLayout";
import DetailField from "../components/ui/DetailField";
import { refName, formatCost } from "../lib/helpers";

// Детальная страница предмета: /items/:index (раздел API — equipment)
function ItemDetail() {
  const { index } = useParams();
  // Внимание: грузим из "equipment", хотя URL — /items.
  const { data: item, isLoading, isError, error } = useResource("equipment", index);

  return (
    <DetailLayout
      title={item?.name}
      subtitle={item ? refName(item.equipment_category) : null}
      isLoading={isLoading}
      isError={isError}
      error={error}
      favoriteItem={item ? { resource: "equipment", index: item.index, name: item.name } : null}
    >
      {item && (
        <>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
            <DetailField label="Стоимость" value={formatCost(item.cost)} />
            <DetailField
              label="Вес"
              value={item.weight ? `${item.weight}` : null}
            />
            <DetailField label="Категория оружия" value={item.weapon_category} />
            <DetailField label="Категория доспеха" value={item.armor_category} />
            <DetailField label="Дальность" value={refName(item.weapon_range)} />
          </dl>

          {/* Описание — массив строк (есть не у всех предметов) */}
          {item.desc?.length > 0 && (
            <div className="mt-6 space-y-3 text-slate-300">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Описание
              </h3>
              {item.desc.map((paragraph, i) => (
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

export default ItemDetail;