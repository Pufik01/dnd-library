import CollectionView from "../components/layout/CollectionView";
import SpellCard from "../components/cards/SpellCard";
import { getResource } from "../lib/getResource";

// Страница «Заклинания».
function Spells() {
  return (
    <CollectionView
      resource={getResource("spells")}
      title="Заклинания"
      renderCard={(spell) => <SpellCard key={spell.index} spell={spell} />}
    />
  );
}

export default Spells;