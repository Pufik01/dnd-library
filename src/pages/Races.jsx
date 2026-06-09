import CollectionView from "../components/layout/CollectionView";
import RaceCard from "../components/cards/RaceCard";
import { getResource } from "../lib/getResource";

// Страница «Расы».
function Races() {
  return (
    <CollectionView
      resource={getResource("races")}
      title="Расы"
      renderCard={(race) => <RaceCard key={race.index} race={race} />}
    />
  );
}

export default Races;