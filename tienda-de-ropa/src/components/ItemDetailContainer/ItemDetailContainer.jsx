import React, { useState, useEffect } from "react";

import { getUnaPrenda } from "../../mockAPI/mockAPI";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import CardDetail from "./CardDetail";

import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {
  const [tienda, setPrenda] = useState([]);

  const { itemID } = useParams();

  useEffect(() => {
    getUnaPrenda(itemID).then((data) => {
      setPrenda(data);
    });
  }, [itemID]);

  return (
    <FlexWrapper>
      <CardDetail tienda={tienda} />
    </FlexWrapper>
  );
}

export default ItemDetailContainer;
