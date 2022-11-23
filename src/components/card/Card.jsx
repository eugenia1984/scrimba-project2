import React from "react";
import "./CardStyles.css";
import "../../App.css";

function Card( { id , coverImg, coverImgAlt, rating, reviewCount, location, title, price}) {
  
    return (
      <div key={ id }>
        <img 
          className="card-image" 
          src={ `../../${coverImg}` }
          alt= { coverImgAlt }
          heigth= {200}
        />
        <div className="card-stats">
          <img 
            className="card-star"
            src="https://img.icons8.com/color/14/null/hand-drawn-star.png" 
            alt="star"/>
          <span>{ rating}</span>
          <span className="gray">( { reviewCount} ) *</span>
          <span className="gray">{ location }</span>
        </div>
        <p>{ title }</p>
        <p><span className="bold">From $ { price } </span>/ person</p>
      </div>
    )
}

export default Card;