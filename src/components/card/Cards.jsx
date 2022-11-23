import React from "react";
import  data   from "../../data";
import "./CardStyles.css";
import "../../App.css";
import Card from "./Card";

function Cards() {
  return (
    <div className="container">
      <div className="row">
        { data.map(item => {
          return (
            <Card 
              className="card col col-sm-12 col-md-6 col-lg-3"
              key={ 0 + item.id }
              id={ item.id }
              coverImg={ item.coverImg }
              coverImgAlt={ item.title }
              rating={ item.stats.rating }
              reviewCount={ item.stats.reviewCount} 
              location={ item.location }
              title= { item.title }
              price={ item.price }
            />
          )
        })
        }
      </div>
    </div>
  );
}

export default Cards;