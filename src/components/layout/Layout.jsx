import { Outlet } from "react-router-dom";
import Header from "./Header";
import TabBar from "./TabBar";

// Общая оболочка: шапка, вкладки и область контента.
function Layout() {
  return (
    <div className="min-h-full bg-slate-900">
      <Header />
      <TabBar />

      {/* Сюда роутер вставляет активную страницу */}
      <main className="mx-auto max-w-6xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;