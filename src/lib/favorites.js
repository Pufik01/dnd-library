// Доступ к избранному в localStorage.
// Вся работа с хранилищем — здесь, остальное приложение её не касается.

const STORAGE_KEY = "dnd-library:favorites";

// Уникальный ключ записи: раздел + index ("spells:fireball").
export function favoriteKey(resource, index) {
  return `${resource}:${index}`;
}

// Прочитать массив избранного из localStorage.
// Формат элемента: { resource, index, name }.
export function readFavorites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    // Хранилище недоступно или данные битые — возвращаем пустой список.
    return [];
  }
}

// Записать массив избранного в localStorage.
export function writeFavorites(favorites) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  } catch {
    // Молча игнорируем (например, переполнено или режим инкогнито).
  }
}