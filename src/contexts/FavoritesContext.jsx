import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext(undefined);

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  function toggleFavorite(courseId) {
    setFavoriteIds((currentIds) =>
      currentIds.includes(courseId)
        ? currentIds.filter((id) => id !== courseId)
        : [...currentIds, courseId]
    );
  }

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }

  return context;
}
