// Сообщение об ошибке загрузки. Универсальное для всех вкладок.
function ErrorMessage({ message }) {
  return (
    <div className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
      {/* Показываем переданный текст или общий запасной вариант */}
      {message || "Не удалось загрузить данные. Попробуйте позже."}
    </div>
  );
}

export default ErrorMessage;