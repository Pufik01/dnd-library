import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchInput from "../ui/SearchInput";

// Шапка приложения с глобальным поиском.
function Header() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // При изменении текста — обновляем URL страницы поиска.
  // Поиск живёт в URL (/search?q=...), результаты пересчитываются на лету.
  const handleChange = (value) => {
    setQuery(value);
    if (value.trim()) {
      navigate(`/search?q=${encodeURIComponent(value)}`);
    }
  };

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        {/* Логотип — кликабельный, ведёт на главную */}
        <button
          onClick={() => navigate("/")}
          className="shrink-0 text-lg font-bold tracking-wide text-slate-100"
        >
          D&D 5e <span className="text-emerald-400">Library</span>
        </button>

        {/* Глобальный поиск. Скрыт на самых узких экранах (hidden sm:block) */}
        <div className="hidden w-full max-w-xs sm:block">
          <SearchInput
            value={query}
            onChange={handleChange}
            placeholder="Поиск по всем разделам…"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;