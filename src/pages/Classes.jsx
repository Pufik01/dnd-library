import CollectionView from "../components/layout/CollectionView";
import ClassCard from "../components/cards/ClassCard";
import { getResource } from "../lib/getResource";

// Страница «Классы».
function Classes() {
  return (
    <CollectionView
      resource={getResource("classes")}
      title="Классы"
      renderCard={(dndClass) => <ClassCard key={dndClass.index} dndClass={dndClass} />}
    />
  );
}

export default Classes;