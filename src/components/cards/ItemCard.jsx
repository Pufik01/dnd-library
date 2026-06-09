import EntityCard from "./EntityCard";

// Карточка предмета в списке. Ведёт на /items/:index (раздел API — equipment).
function ItemCard({ item }) {
  return (
    <EntityCard
      to={`/items/${item.index}`}
      item={{ resource: "equipment", index: item.index, name: item.name }}
    >
      <span className="font-medium text-slate-100">{item.name}</span>
    </EntityCard>
  );
}

export default ItemCard;