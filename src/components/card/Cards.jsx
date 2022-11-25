import React from "react";
import  data   from "../../data";
import "./CardStyles.css";
import "../../App.css";
import Card from "./Card";

function Cards() {
  return (
    <section>
      <div className="cards-list">
      { data.map(item => {
        return (
          <Card 
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
    </section>
  );
}

export default Cards;