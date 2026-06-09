import { useSearchParams, Link } from "react-router-dom";
import { useGlobalSearch } from "../hooks/useGlobalSearch";
import Spinner from "../components/ui/Spinner";
import EmptyState from "../components/ui/EmptyState";

// Страница результатов глобального поиска.
// Запрос читается из URL: /search?q=...
function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  // Ищем по всем разделам.
  const { groups, isLoading } = useGlobalSearch(query);

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-100">
        Поиск{query && <span className="text-slate-400">: «{query}»</span>}
      </h2>

      {/* Пустой запрос — подсказка */}
      {!query.trim() && (
        <p className="mt-2 text-slate-400">Введите запрос в строке поиска вверху.</p>
      )}

      {/* Идёт загрузка разделов */}
      {query.trim() && isLoading && <Spinner />}

      {/* Загрузка завершена, совпадений нет */}
      {query.trim() && !isLoading && groups.length === 0 && (
        <div className="mt-4">
          <EmptyState message="По запросу ничего не найдено во всех разделах." />
        </div>
      )}

      {/* Результаты, сгруппированные по разделам */}
      {query.trim() && !isLoading && groups.length > 0 && (
        <div className="mt-6 space-y-8">
          {groups.map(({ tab, matches }) => (
            <section key={tab.key}>
              {/* Заголовок группы: раздел + число совпадений */}
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-400">
                {tab.label}
                <span className="ml-2 text-slate-500">({matches.length})</span>
              </h3>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {matches.map((item) => (
                  <div
                    key={item.index}
                    className="rounded-lg border border-slate-800 bg-slate-800/40 px-4 py-3 text-slate-100"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;