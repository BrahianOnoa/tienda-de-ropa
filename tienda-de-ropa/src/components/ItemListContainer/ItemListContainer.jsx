import React, { useState, useEffect } from "react";
import "./itemlistcontainer.css";

import { getTiendas, getTiendasByCategory } from "../../mockAPI/mockAPI";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [tiendasList, setTiendasList] = useState([]);
  const params = useParams();
  const categoryID = params.categoryID;

  useEffect(() => {
    if (categoryID === undefined) {
      getTiendas().then((data) => {
        setTiendasList(data);
      });
    } else {
      getTiendasByCategory(categoryID).then((data) => {
        setTiendasList(data);
      });
    }
  }, [categoryID]);

  return (
    <div className="container">
      <h1>Titulo</h1>
      <ItemList tiendasList={tiendasList} />
      <hr />
    </div>
  );
}

export default ItemListContainer;
