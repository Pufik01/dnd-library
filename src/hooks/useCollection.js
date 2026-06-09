import { useQuery } from "@tanstack/react-query";
import { getCollection } from "../lib/api";

// Хук загрузки списка раздела.
// Обёртка над TanStack Query: кэширование + состояния загрузки/ошибки.
// resource — ключ раздела API ("spells", "monsters", ...).
export function useCollection(resource) {
  return useQuery({
    // Ключ кэша. Свой для каждого раздела — кэши вкладок независимы.
    queryKey: ["collection", resource],
    // Функция загрузки данных.
    queryFn: () => getCollection(resource),
  });
}