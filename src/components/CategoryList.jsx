import React from 'react';

function CategoryList({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="categories-filter">
      <button
        className={`category-btn${selectedCategory === '' ? ' active' : ''}`}
        type="button"
        aria-pressed={selectedCategory === ''}
        onClick={() => onCategoryChange('')}
      >
        Kõik
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`category-btn${selectedCategory === category.toUpperCase() ? ' active' : ''}`}
          type="button"
          aria-pressed={selectedCategory === category.toUpperCase()}
          onClick={() => onCategoryChange(category.toUpperCase())}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryList;