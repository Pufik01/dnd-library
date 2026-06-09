// Вспомогательные функции форматирования данных.

// Соединяет массив строк в одну строку через запятую.
export function joinList(arr) {
  if (!arr || arr.length === 0) return null;
  return arr.join(", ");
}

// Достаёт читаемое название из вложенного объекта-ссылки API { index, name, url }.
export function refName(ref) {
  return ref?.name ?? null;
}

// Считает модификатор характеристики D&D по её значению.
// Формула: (значение - 10) / 2, округление вниз.
// Возвращает строку со знаком: 14 -> "+2", 8 -> "-1".
export function abilityModifier(score) {
  if (score === null || score === undefined) return null;
  const mod = Math.floor((score - 10) / 2);
  return mod >= 0 ? `+${mod}` : `${mod}`;
}

// Форматирует стоимость предмета из объекта { quantity, unit }.
// Пример: { quantity: 50, unit: "gp" } -> "50 gp". Нет данных -> null.
export function formatCost(cost) {
  if (!cost || cost.quantity === undefined) return null;
  return `${cost.quantity} ${cost.unit}`;
}