import EntityCard from "./EntityCard";

// Карточка монстра в списке. Ведёт на /monsters/:index.
function MonsterCard({ monster }) {
  return (
    <EntityCard
      to={`/monsters/${monster.index}`}
      item={{ resource: "monsters", index: monster.index, name: monster.name }}
    >
      <span className="font-medium text-slate-100">{monster.name}</span>
    </EntityCard>
  );
}

export default MonsterCard;