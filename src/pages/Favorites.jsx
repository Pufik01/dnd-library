import { Link } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";
import { favoriteUrl, resourceLabel } from "../lib/favoritesNav";
import FavoriteButton from "../components/ui/FavoriteButton";
import EmptyState from "../components/ui/EmptyState";

// Страница «Избранное»: всё сохранённое, сгруппированное по разделам.
function Favorites() {
  const { favorites } = useFavorites();

  // Группируем избранное по разделу: { spells: [...], monsters: [...] }
  const groups = favorites.reduce((acc, item) => {
    (acc[item.resource] = acc[item.resource] || []).push(item);
    return acc;
  }, {});

  const resources = Object.keys(groups);

  return (
    <div>
      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="text-2xl font-bold text-slate-100">Избранное</h2>
        {favorites.length > 0 && (
          <span className="text-sm text-slate-400">всего: {favorites.length}</span>
        )}
      </div>

      {/* Пустой список */}
      {favorites.length === 0 && (
        <EmptyState message="Пока пусто. Отмечайте записи звёздочкой, и они появятся здесь." />
      )}

      {/* Группы по разделам */}
      {resources.length > 0 && (
        <div className="space-y-8">
          {resources.map((resource) => (
            <section key={resource}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-400">
                {resourceLabel(resource)}
                <span className="ml-2 text-slate-500">
                  ({groups[resource].length})
                </span>
              </h3>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {groups[resource].map((item) => (
                  <Link
                    key={`${item.resource}:${item.index}`}
                    to={favoriteUrl(item.resource, item.index)}
                    className="group flex items-center justify-between gap-2 rounded-lg border border-slate-800 bg-slate-800/40 px-4 py-3 transition-colors hover:border-emerald-500/50 hover:bg-slate-800"
                  >
                    <span className="min-w-0 truncate font-medium text-slate-100">
                      {item.name}
                    </span>
                    {/* Звёздочка для быстрого удаления из избранного */}
                    <FavoriteButton item={item} />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;