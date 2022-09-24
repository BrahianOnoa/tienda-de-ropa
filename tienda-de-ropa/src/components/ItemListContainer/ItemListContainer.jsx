import React from "react";
import Card from "../Card/Card";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

function ItemListContainer(props) {
  return (
    <>
      <h1>...</h1>
      <FlexWrapper>
        <Card
          img="https://http2.mlstatic.com/D_NQ_NP_649731-MLA43505941757_092020-O.webp"
          title="Remera"
          detail="Cuello en V corte liso sin diseño"
          price="250"
        />
        <Card
          img="https://http2.mlstatic.com/D_NQ_NP_924762-MLA31734104051_082019-O.jpg"
          title="Pantalón"
          detail="Largo, color negro, chupín"
          price="350"
        />

        <Card
          img="https://cdn.shopify.com/s/files/1/0517/6282/3347/products/HCAC01004011-01_900x.jpg?v=1644843629"
          title="Zapatos"
          detail="Color negro, material de cuero con suela flexible "
          price="400"
        />

        <Card
          img="https://urquizamotos.com.ar/63050-large_default/campera-de-turismo-4-estaciones-held-renegade-negro-gris.jpg"
          title="Campera"
          detail="Semi deportiva, ligera con diseño"
          price="380"
        />

        <Card
          img="https://www.opticapaesani.com.ar/media/catalog/product/cache/8/image/9df78eab33525d08d6e5fb8d27136e95/3/0/3025_q.jpg"
          title="Lentes de sol"
          detail="Estilo Aviator, marco dorado"
          price="110"
        />

        <Card
          img="https://www.remerasya.com/media/catalog/product/cache/9b2aa87fb0aaf4ac6e04c367a4c41fb8/c/a/canguro_negro_600x600px.jpg"
          title="Buzo"
          detail="Negro plano con capucha "
          price="255"
        />

        <Card
          img="https://http2.mlstatic.com/D_NQ_NP_2X_989432-MLA48089545386_112021-F.webp"
          title="Gorra"
          detail="Estilo hip hop, ancha"
          price="100"
        />

      </FlexWrapper>
    </>
  );
}

export default ItemListContainer;
