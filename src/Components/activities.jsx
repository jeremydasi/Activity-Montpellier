import React, { useState, useEffect } from "react";
import Card from "./card.jsx";
import Carousel from "./carousel.jsx";
import Header from "./header.jsx";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
    if (selectedCategory === "Tous") {
      setFilteredActivities(activities);
    } else {
      setFilteredActivities(
        activities.filter((activity) => activity.category === selectedCategory)
      );
    }
  }, [selectedCategory, activities]);

  return (
    <div className="activities">
      <Header
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

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
