import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import FavoriteButton from "../ui/FavoriteButton";

// Базовая карточка-обёртка с общим оформлением.
// to       — адрес детальной страницы
// item     — { resource, index, name } для кнопки избранного
// children — содержимое конкретной карточки
function EntityCard({ to, item, children }) {
  return (
    <Link
      to={to}
      className="group flex items-center justify-between gap-2 rounded-lg border border-slate-800 bg-slate-800/40 px-4 py-3 transition-colors hover:border-emerald-500/50 hover:bg-slate-800"
    >
      <span className="min-w-0 truncate">{children}</span>

      <span className="flex shrink-0 items-center gap-2">
        {item && <FavoriteButton item={item} />}

        {/* Иконка-стрелка перехода */}
        <ChevronRight
          size={18}
          className="text-slate-600 transition-colors group-hover:text-emerald-400"
        />
      </span>
    </Link>
  );
}

export default EntityCard;