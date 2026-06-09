// Описание вкладок приложения.
export const TABS = [
  { key: "spells",   path: "/spells",   label: "Заклинания", resource: "spells" },
  { key: "monsters", path: "/monsters", label: "Монстры",    resource: "monsters" },
  { key: "classes",  path: "/classes",  label: "Классы",     resource: "classes" },
  { key: "items",    path: "/items",    label: "Предметы",   resource: "equipment" },
  { key: "races",    path: "/races",    label: "Расы",       resource: "races" },
  // Избранное — локальный раздел, не из API.
  { key: "favorites", path: "/favorites", label: "Избранное" },
];

export const DEFAULT_TAB = "/spells";