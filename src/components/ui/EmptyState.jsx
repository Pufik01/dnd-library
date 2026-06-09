// Заглушка «ничего не найдено». Общая для списков и поиска.
function EmptyState({ message = "Ничего не найдено." }) {
  return (
    <div className="rounded-md border border-slate-800 bg-slate-800/30 px-4 py-8 text-center text-sm text-slate-400">
      {message}
    </div>
  );
}

export default EmptyState;