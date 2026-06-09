import { useQueries } from "@tanstack/react-query";
import { getCollection } from "../lib/api";
import { TABS } from "../lib/constants";

// Берём только реальные API-разделы (у «Избранного» нет resource).
const SEARCHABLE_TABS = TABS.filter((tab) => tab.resource);

// Глобальный поиск по всем разделам сразу.
export function useGlobalSearch(query) {
  const results = useQueries({
    queries: SEARCHABLE_TABS.map((tab) => ({
      queryKey: ["collection", tab.resource],
      queryFn: () => getCollection(tab.resource),
      staleTime: 5 * 60 * 1000,
    })),
  });

  const isLoading = results.some((r) => r.isLoading);
  const q = query.trim().toLowerCase();
  if (!q) return { groups: [], isLoading };

  const groups = SEARCHABLE_TABS.map((tab, i) => {
    const data = results[i].data || [];
    const matches = data.filter((item) =>
      item.name.toLowerCase().includes(q)
    );
    return { tab, matches };
  }).filter((group) => group.matches.length > 0);

  return { groups, isLoading };
}