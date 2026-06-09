// Слой доступа к данным.
// ВСЕ обращения к внешнему API живут здесь.
// Если позже перейдём на локальные JSON из src/data/ — меняем только этот файл,
// остальное приложение не трогаем.

// Базовый адрес официального D&D 5e API (только SRD-контент).
const BASE_URL = "https://www.dnd5eapi.co/api";

// Низкоуровневый помощник: делает запрос и разбирает JSON.
// Кидает ошибку при неуспешном ответе — её поймает TanStack Query.
async function request(path) {
  const response = await fetch(`${BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(`Ошибка запроса: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// Получить список записей раздела.
// resource — ключ раздела в API: "spells", "monsters", "classes", "equipment", "races".
// Возвращает массив вида [{ index, name, url }].
export async function getCollection(resource) {
  const data = await request(`/${resource}`);
  // API отдаёт { count, results: [...] } — наружу отдаём только results.
  return data.results;
}

// Получить полные данные одной записи по её index.
// Пригодится для детальных страниц (этап 6).
export async function getResourceByIndex(resource, index) {
  return request(`/${resource}/${index}`);
}