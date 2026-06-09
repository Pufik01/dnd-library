// Строка «подпись: значение» на детальной странице.
// label — название поля
// value — значение (если пустое — блок не рендерится)
function DetailField({ label, value }) {
  // Не показываем поля без значения.
  if (value === null || value === undefined || value === "") return null;

  return (
    <div className="flex flex-col">
      <dt className="text-xs uppercase tracking-wide text-slate-500">{label}</dt>
      <dd className="mt-0.5 text-slate-100">{value}</dd>
    </div>
  );
}

export default DetailField;