import React from "react";
import Logo from "../assets/logo.png";

const Header = ({ categories = [], selectedCategory, onCategoryChange }) => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
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
      <span></span>
    </div>
  );
};

export default Header;
