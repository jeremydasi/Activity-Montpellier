import React from "react";
import '../Styles/card.scss';

const Card = ({ activity }) => {
    return(
        <div>
            <h2>{activity.name}</h2>
            <p>{activity.description}</p>
            <p><strong>Localisation: </strong>{activity.localisation}</p>
            <p><strong>Catégorie: </strong>{activity.category}</p>
            <p><strong>Prix: </strong>{activity.price}</p>
        </div>
    )
}

export default Card;