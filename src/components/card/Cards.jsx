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
            item={item}
          />
        )
      })
      }
    </div>
    </section>
  );
}

export default Cards;