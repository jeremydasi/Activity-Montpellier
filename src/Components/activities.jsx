import React, { useState, useEffect } from "react";
import Card from "./card.jsx";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [query, setQuery] = useState("");

  const fetchActivities = async (searchQuery) => {
    try {
      const response = await fetch(
        `http://localhost:5000/search?query=${encodeURIComponent(searchQuery)}`
      );
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des activités");
      }
      const data = await response.json();
      setActivities(data);
    } catch (error) {
      console.error(error.message);
    }
  };


  return (
    <div className="activities">
      <h1 className="title">Liste des Activités à faire sur Montpellier</h1>
        <div>
          {activities.length === 0 ? (
            <p className="activityNone">Aucune activité trouvée</p>
          ) : (
            activities.map((activity) => (
              <Card key={activity._id} activity={activity} />
            ))
          )}
        </div>
    </div>
  );
};

export default Activities;
