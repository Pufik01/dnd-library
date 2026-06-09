import { NavLink } from "react-router-dom";
import { Star } from "lucide-react";
import { TABS } from "../../lib/constants";

// Панель вкладок под шапкой.
function TabBar() {
  const linkClass = ({ isActive }) =>
    [
      "flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors",
      isActive
        ? "bg-emerald-500/15 text-emerald-400"
        : "text-slate-300 hover:bg-slate-800 hover:text-slate-100",
    ].join(" ");

  return (
    <nav className="sticky top-[57px] z-10 border-b border-slate-800 bg-slate-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2">
        {TABS.map((tab) => (
          <NavLink key={tab.key} to={tab.path} className={linkClass}>
            {/* Иконка звезды только у вкладки избранного */}
            {tab.key === "favorites" && <Star size={14} />}
            {tab.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default TabBar;