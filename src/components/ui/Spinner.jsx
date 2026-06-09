// Индикатор загрузки. Общий для всех вкладок.
function Spinner() {
  return (
    <div className="flex items-center justify-center py-12">
      {/* Крутящийся круг на CSS-анимации Tailwind (animate-spin) */}
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-600 border-t-emerald-400" />
    </div>
  );
}

export default Spinner;