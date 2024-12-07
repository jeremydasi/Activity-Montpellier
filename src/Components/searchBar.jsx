import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recherche une activité"
          value={query}
          onChange={(e) => setQuery(e.query.value)}
          className="SearchBar"
        />

        <button className="search" type="submit">Rechercher</button>
      </form>
    </div>
  );
};


export default SearchBar;