import React from "react";
import Card from "../Card/Card";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

function ItemList(props) {
  return (
    <>
      <FlexWrapper>
        {props.tiendaList.map((tienda) => {
          return (
            <Card
              key={tienda.id}
              id={tienda.id}
              title={tienda.title}
              img={tienda.img}
              price={tienda.price}
              detail={tienda.detail}
              stock={tienda.stock}
              expired={tienda.expires}
            />
          );
        })}
      </FlexWrapper>
    </>
  );
}

export default ItemList;
