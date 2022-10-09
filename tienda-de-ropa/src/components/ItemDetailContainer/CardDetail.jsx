import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";

function CardDetail({ tienda }) {
  return (
    <div className="detail-container">
      <FlexWrapper>
        <div className="main container">
          <h1>{tienda.title}</h1>
          <img src={tienda.img} alt={tienda.title} />
          <h3>$ {tienda.price}</h3>
        </div>
        <ItemCount stock={tienda.stock} initial={1} text="Agregar al carrito" />
      </FlexWrapper>
    </div>
  );
}

export default CardDetail;
