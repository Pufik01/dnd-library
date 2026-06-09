import EntityCard from "./EntityCard";

// Карточка заклинания в списке. Ведёт на /spells/:index.
function SpellCard({ spell }) {
  return (
    <EntityCard
      to={`/spells/${spell.index}`}
      item={{ resource: "spells", index: spell.index, name: spell.name }}
    >
      <span className="font-medium text-slate-100">{spell.name}</span>
    </EntityCard>
  );
}

export default SpellCard;