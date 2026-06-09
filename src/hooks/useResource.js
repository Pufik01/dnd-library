import { useQuery } from "@tanstack/react-query";
import { getResourceByIndex } from "../lib/api";

// Хук загрузки одной записи по её index.
// resource — ключ раздела API ("spells", "monsters", ...)
// index    — идентификатор записи (например "fireball")
export function useResource(resource, index) {
  return useQuery({
    // Ключ кэша уникален для пары раздел + запись.
    queryKey: ["resource", resource, index],
    queryFn: () => getResourceByIndex(resource, index),
    // index всегда есть в URL, но на всякий случай не запускаем запрос без него.
    enabled: Boolean(index),
  });
}