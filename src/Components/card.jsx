import React from "react";

const Card = ({ activity }) => {
    return(
        <div className="card">
            <h2 className="nameActivity">{activity.name}</h2>
            <p className="descriptionActivity">{activity.description}</p>
            <p className="detailActivity"><strong>Localisation: </strong>{activity.localisation}</p>
            <p className="detailActivity"><strong>Catégorie: </strong>{activity.category}</p>
            <p className="detailActivity"><strong>Prix: </strong>{activity.price}€</p>
        </div>
    )
}

export default Card;