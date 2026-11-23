import React from 'react';
import { useFavorites } from '../contexts/FavoritesContext';

function CourseCard({ courseId, title, description, duration, category }) {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const isFavorite = favoriteIds.includes(courseId);

  return (
    <article className="course-card">
      <span className="card-category">{category}</span>
      <h3>{title}</h3>
      <p className="card-desc">{description}</p>
      <p className="card-meta">Maht: {duration}</p>
      <button
        className={`favorite-btn${isFavorite ? ' is-favorite' : ''}`}
        type="button"
        aria-pressed={isFavorite}
        aria-label={`${isFavorite ? 'Eemalda lemmikutest' : 'Lisa lemmikuks'}: ${title}`}
        onClick={() => toggleFavorite(courseId)}
      >
        {isFavorite ? 'Eemalda lemmikutest' : 'Lisa lemmikuks'}
      </button>
    </article>
  );
}

export default CourseCard;