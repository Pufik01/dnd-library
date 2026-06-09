import { useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import { useFilters } from "../../hooks/useFilters";
import SearchInput from "../ui/SearchInput";
import Spinner from "../ui/Spinner";
import ErrorMessage from "../ui/ErrorMessage";
import EmptyState from "../ui/EmptyState";

// Переиспользуемый список раздела с поиском по названию.
// Props:
//   resource   — ключ раздела API
//   title      — заголовок страницы
//   renderCard — функция (item) => JSX для одной записи
function CollectionView({ resource, title, renderCard }) {
  // Загружаем раздел (кэшируется по resource).
  const { data: items, isLoading, isError, error } = useCollection(resource);

  // Локальный поиск этой вкладки.
  const [query, setQuery] = useState("");

  // Отфильтрованный список по строке поиска.
  const filtered = useFilters(items, query);

  return (
    <div>
      {/* Заголовок + счётчик: показываем «найдено / всего» */}
      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="text-2xl font-bold text-slate-100">{title}</h2>
        {items && (
          <span className="text-sm text-slate-400">
            {/* Если идёт поиск — показываем, сколько нашли из общего числа */}
            {query.trim()
              ? `найдено: ${filtered.length} из ${items.length}`
              : `всего: ${items.length}`}
          </span>
        )}
      </div>

      {/* Поле поиска. Доступно, когда данные загружены. */}
      {items && (
        <div className="mb-4">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder={`Поиск: ${title.toLowerCase()}…`}
          />
        </div>
      )}

      {/* Состояние: загрузка */}
      {isLoading && <Spinner />}

      {/* Состояние: ошибка */}
      {isError && <ErrorMessage message={error?.message} />}

      {/* Данные есть, но фильтр ничего не дал */}
      {items && filtered.length === 0 && (
        <EmptyState message="По запросу ничего не найдено." />
      )}

      {/* Данные есть — сетка карточек (по отфильтрованному списку) */}
      {items && filtered.length > 0 && (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => renderCard(item))}
        </div>
      )}
    </div>
  );
}

export default CollectionView;