import React from "react";
import SearchBar from "./searchBar";

const Header = ({ onSearch }) => {
  return (
    <div className="header">
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Header;
