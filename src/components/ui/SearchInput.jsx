import { Search, X } from "lucide-react";

// Поле поиска. Управляемый компонент: значение и onChange приходят извне.
function SearchInput({ value, onChange, placeholder = "Поиск…" }) {
  return (
    <div className="relative">
      {/* Иконка лупы слева */}
      <Search
        size={16}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-700 bg-slate-800/60 py-2 pl-9 pr-9 text-sm text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-emerald-500/60"
      />

      {/* Кнопка очистки — видна только при наличии текста */}
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-200"
          aria-label="Очистить поиск"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}

export default SearchInput;