import React, { useState, useEffect } from "react";
import Card from "./card.jsx";
import Carousel from "./carousel.jsx";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/activities');
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des activités");
        }
        const data = await response.json();
        setActivities(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div className="activities">
      <h1 className="title">Activités à faire sur Montpellier</h1>
      <Carousel />
      {loading ? (
        <p>Chargement des activités...</p>
      ) : error ? (
        <p className="activityError">Erreur : {error}</p>
      ) : activities.length === 0 ? (
        <p className="activityNone">Aucune activité trouvée</p>
      ) : (
        <div className="containerActivity">
          {activities.map((activity) => (
            <Card key={activity._id} activity={activity} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Activities;
