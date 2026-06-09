import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Spinner from "../ui/Spinner";
import ErrorMessage from "../ui/ErrorMessage";
import FavoriteButton from "../ui/FavoriteButton";

// Общий каркас детальной страницы.
function DetailLayout({
  title,
  subtitle,
  isLoading,
  isError,
  error,
  favoriteItem,
  children,
}) {
  const navigate = useNavigate();

  return (
    <div>
      {/* Кнопка возврата к предыдущей странице */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-emerald-400"
      >
        <ArrowLeft size={16} />
        Назад
      </button>

      {isLoading && <Spinner />}
      {isError && <ErrorMessage message={error?.message} />}

      {!isLoading && !isError && (
        <article>
          <header className="mb-6 border-b border-slate-800 pb-4">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-3xl font-bold text-slate-100">{title}</h2>
              {favoriteItem && <FavoriteButton item={favoriteItem} />}
            </div>
            {subtitle && <p className="mt-1 text-emerald-400">{subtitle}</p>}
          </header>

          {children}
        </article>
      )}
    </div>
  );
}

export default DetailLayout;