import CollectionView from "../components/layout/CollectionView";
import ItemCard from "../components/cards/ItemCard";
import { getResource } from "../lib/getResource";

// Страница «Предметы» (раздел API — equipment).
function Items() {
  return (
    <CollectionView
      resource={getResource("items")}
      title="Предметы"
      renderCard={(item) => <ItemCard key={item.index} item={item} />}
    />
  );
}

export default Items;