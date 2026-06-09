import { useMemo } from "react";

// Хук фильтрации списка по строке поиска (по полю name).
// items — исходный массив записей [{ index, name, ... }]
// query — строка поиска
// Возвращает новый отфильтрованный массив.
export function useFilters(items, query) {
  return useMemo(() => {
    // Нет данных — отдаём пустой массив (защита от undefined при загрузке).
    if (!items) return [];

    // Пустой запрос — возвращаем всё без фильтрации.
    const q = query.trim().toLowerCase();
    if (!q) return items;

    // Оставляем записи, чьё название содержит подстроку запроса.
    return items.filter((item) => item.name.toLowerCase().includes(q));
  }, [items, query]);
}