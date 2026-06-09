// Сопоставление раздела API -> сегмент URL детальной страницы.
// Для большинства совпадает, кроме equipment -> items.
const RESOURCE_TO_PATH = {
  spells: "spells",
  monsters: "monsters",
  classes: "classes",
  equipment: "items", // раздел API equipment живёт по адресу /items
  races: "races",
};

// Человекочитаемые названия разделов для группировки в избранном.
const RESOURCE_LABELS = {
  spells: "Заклинания",
  monsters: "Монстры",
  classes: "Классы",
  equipment: "Предметы",
  races: "Расы",
};

// URL детальной страницы записи из избранного.
export function favoriteUrl(resource, index) {
  return `/${RESOURCE_TO_PATH[resource]}/${index}`;
}

// Подпись раздела для заголовков групп.
export function resourceLabel(resource) {
  return RESOURCE_LABELS[resource] || resource;
}