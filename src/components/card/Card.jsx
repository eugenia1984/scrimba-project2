import React from "react";
import  CardInfo   from "./CardInfo.js";
import "./CardStyles.css";
import "../../App.css";

function Card() {
  
  return (
    { CardInfo.map( card => {
      return (
        <div className="card" key={ card.id }>
          <img 
            className="card-image" 
            src={ card.imagesrc }
            alt= {card.p1 }/>
          <div className="card-stats">
            <img 
              className="card-star"
              src="https://img.icons8.com/color/14/null/hand-drawn-star.png" 
              alt="star"/>
            <span>{card.rating}</span>
            <span className="gray">( {card.reviewCount} ) *</span>
            <span className="gray">{card.country}</span>
          </div>
          <p>{card.title}</p>
          <p><span className="bold">From $ {card.price} </span>/ person</p>
        </div>
      )
    })}
  );
}

export default Card;