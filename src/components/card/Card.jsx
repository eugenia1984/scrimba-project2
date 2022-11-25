import React from "react";
import "./CardStyles.css";
import "../../App.css";

function Card( { id , item }) {
  const { coverImg, coverImgAlt, rating, reviewCount, location, title, price, openSpots } = item;
  
  let badgeText;
  if(openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText="ONLINE";
  }
 
  return (
    <div key={ id } className="card">
      {openSpots === 0 && <div className="card-badge">{badgeText} </div>}
      {location === "Online" && <div className="card-badge">{badgeText} </div>}
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