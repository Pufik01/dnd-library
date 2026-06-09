import { Star } from "lucide-react";
import { useFavorites } from "../../hooks/useFavorites";

// Кнопка добавления/удаления из избранного.
// item — { resource, index, name }
function FavoriteButton({ item }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(item.resource, item.index);

  const handleClick = (e) => {
    // Карточка — ссылка. Гасим всплытие, чтобы не перейти по ней.
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(item);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={active ? "Убрать из избранного" : "Добавить в избранное"}
      className={`shrink-0 transition-colors ${
        active ? "text-amber-400" : "text-slate-600 hover:text-amber-400"
      }`}
    >
      {/* Заполняем звезду, когда запись в избранном */}
      <Star size={18} fill={active ? "currentColor" : "none"} />
    </button>
  );
}

export default FavoriteButton;