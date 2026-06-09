/** @type {import('tailwindcss').Config} */
export default {
  // Где Tailwind ищет используемые классы.
  // Перечисляем index.html и все js/jsx-файлы внутри src.
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // Сюда позже добавим кастомные цвета/шрифты темы D&D.
    },
  },
  plugins: [],
}