import EntityCard from "./EntityCard";

// Карточка расы в списке. Ведёт на /races/:index.
function RaceCard({ race }) {
  return (
    <EntityCard
      to={`/races/${race.index}`}
      item={{ resource: "races", index: race.index, name: race.name }}
    >
      <span className="font-medium text-slate-100">{race.name}</span>
    </EntityCard>
  );
}

export default RaceCard;