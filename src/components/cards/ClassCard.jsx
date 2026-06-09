import EntityCard from "./EntityCard";

// Карточка класса в списке. Ведёт на /classes/:index.
function ClassCard({ dndClass }) {
  return (
    <EntityCard
      to={`/classes/${dndClass.index}`}
      item={{ resource: "classes", index: dndClass.index, name: dndClass.name }}
    >
      <span className="font-medium text-slate-100">{dndClass.name}</span>
    </EntityCard>
  );
}

export default ClassCard;