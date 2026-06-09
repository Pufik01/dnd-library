import CollectionView from "../components/layout/CollectionView";
import MonsterCard from "../components/cards/MonsterCard";
import { getResource } from "../lib/getResource";

// Страница «Монстры».
function Monsters() {
  return (
    <CollectionView
      resource={getResource("monsters")}
      title="Монстры"
      renderCard={(monster) => <MonsterCard key={monster.index} monster={monster} />}
    />
  );
}

export default Monsters;