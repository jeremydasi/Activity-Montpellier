import React from "react";

const Header = ({ categories = [], selectedCategory, onCategoryChange }) => {
  return (
    <div className="header">
      <nav className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Header;
