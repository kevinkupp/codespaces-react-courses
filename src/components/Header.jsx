import React from 'react';
import Navigation from './Navigation';
import { useFavorites } from '../contexts/FavoritesContext';

function Header() {
  const { favoriteIds } = useFavorites();

  return (
    <header className="site-header">
      <div className="container header-content">
        <div className="logo">Õpikeskus</div>
        <Navigation />
        <span className="favorites-count" aria-live="polite">
          Lemmikud: {favoriteIds.length}
        </span>
      </div>
    </header>
  );
}

export default Header;