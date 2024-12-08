import React, { useState, useEffect } from "react";
import Card from "./card.jsx";
import Carousel from "./carousel.jsx";
import Header from "./header.jsx";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const categories = [
    "Tous",
    "Sport & Loisir",
    "Nature & Plein Air",
    "Culture & Patrimoine",
    "Gastronomie",
    "Shopping",
    "Bien Être & Détente",
  ];

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/activities");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des activités");
        }
        const data = await response.json();
        console.log("Données récupérées :", data);
        setActivities(data);
        setFilteredActivities(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  useEffect(() => {
    if (!Array.isArray(activities)) return;

    const filteredByCategory =
      selectedCategory === "Tous"
        ? activities
        : activities.filter(
            (activity) => activity.category === selectedCategory
          );

    const finalFilteredActivities = filteredByCategory.filter((activity) =>
      (activity.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.category?.toLowerCase().includes(searchTerm.toLowerCase())) ||
      false
    );

    setFilteredActivities(finalFilteredActivities);
  }, [searchTerm, selectedCategory, activities]);

  return (
    <div className="activities">
      <Header
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher une activité"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <h1 className="title">MontpellierAventure</h1>
      <Carousel />
      {loading ? (
        <p>Chargement des activités...</p>
      ) : error ? (
        <p className="activityError">Erreur : {error}</p>
      ) : filteredActivities.length === 0 ? (
        <p className="activityNone">Aucune activité trouvée</p>
      ) : (
        <div className="containerActivity">
          {filteredActivities.map((activity) => (
            <Card key={activity._id} activity={activity} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Activities;
