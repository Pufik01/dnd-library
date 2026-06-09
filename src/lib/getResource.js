import { TABS } from "./constants";

// Возвращает ключ API-раздела по ключу вкладки.
// Чтобы страницы не зашивали имя эндпоинта строкой.
export function getResource(tabKey) {
  return TABS.find((tab) => tab.key === tabKey).resource;
}