import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FavoritesProvider } from "./hooks/useFavorites";
import AppRoutes from "./routes/AppRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* Контекст избранного доступен всему дереву */}
        <FavoritesProvider>
          <AppRoutes />
        </FavoritesProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;