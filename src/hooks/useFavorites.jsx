import { createContext, useContext, useState, useEffect } from "react";
import { readFavorites, writeFavorites, favoriteKey } from "../lib/favorites";

// Контекст избранного — единый источник правды для всего приложения.
const FavoritesContext = createContext(null);

// Провайдер. Оборачивает приложение, хранит список избранного.
export function FavoritesProvider({ children }) {
  // Инициализируем состояние данными из localStorage (один раз).
  const [favorites, setFavorites] = useState(() => readFavorites());

  // При любом изменении списка — сохраняем в localStorage.
  useEffect(() => {
    writeFavorites(favorites);
  }, [favorites]);

  // Есть ли запись в избранном.
  const isFavorite = (resource, index) =>
    favorites.some((f) => f.resource === resource && f.index === index);

  // Переключить: добавить, если нет; убрать, если есть.
  // item — { resource, index, name }
  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const exists = prev.some(
        (f) => f.resource === item.resource && f.index === item.index
      );
      if (exists) {
        return prev.filter(
          (f) => !(f.resource === item.resource && f.index === item.index)
        );
      }
      return [...prev, item];
    });
  };

  const value = { favorites, isFavorite, toggleFavorite };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

// Хук доступа к избранному. Используется в кнопках и на странице избранного.
export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    throw new Error("useFavorites должен использоваться внутри FavoritesProvider");
  }
  return ctx;
}

// Реэкспорт хелпера ключа — на случай, если понадобится снаружи.
export { favoriteKey };