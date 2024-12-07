import React, { useState } from 'react';
import './Styles/main.scss'
import Activities from "./Components/activities.jsx";
import Footer from "./Components/footer.jsx";
import Header from "./Components/header.jsx";

function App() {
  const [query, setQuery] = useState("");

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };
  
  return (
    <div>
      <Header onSearch={handleSearch} />
      <Activities query={query} />
      <Footer />
    </div>
  );
}

export default App;
