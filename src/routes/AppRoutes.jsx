import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { DEFAULT_TAB } from "../lib/constants";

import Spells from "../pages/Spells";
import SpellDetail from "../pages/SpellDetail";
import Monsters from "../pages/Monsters";
import MonsterDetail from "../pages/MonsterDetail";
import Classes from "../pages/Classes";
import ClassDetail from "../pages/ClassDetail";
import Items from "../pages/Items";
import ItemDetail from "../pages/ItemDetail";
import Races from "../pages/Races";
import RaceDetail from "../pages/RaceDetail";
import Search from "../pages/Search";
import Favorites from "../pages/Favorites";

// Описание всех маршрутов приложения.
function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to={DEFAULT_TAB} replace />} />

        <Route path="/spells" element={<Spells />} />
        <Route path="/spells/:index" element={<SpellDetail />} />

        <Route path="/monsters" element={<Monsters />} />
        <Route path="/monsters/:index" element={<MonsterDetail />} />

        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/:index" element={<ClassDetail />} />

        <Route path="/items" element={<Items />} />
        <Route path="/items/:index" element={<ItemDetail />} />

        <Route path="/races" element={<Races />} />
        <Route path="/races/:index" element={<RaceDetail />} />

        <Route path="/search" element={<Search />} />

        {/* Избранное */}
        <Route path="/favorites" element={<Favorites />} />

        <Route path="*" element={<Navigate to={DEFAULT_TAB} replace />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;