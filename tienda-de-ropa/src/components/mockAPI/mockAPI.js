const data = [
  {
    id: 1,
    title: "Remera",
    img: "https://http2.mlstatic.com/D_NQ_NP_649731-MLA43505941757_092020-O.webp",
    price: 250,
    expired: true,
    detail: "Cuello en V corte liso sin diseño",
    stock: 20,
    category: "Ropa",
  },
  {
    id: 2,
    title: "Pantalón",
    img: "https://http2.mlstatic.com/D_NQ_NP_924762-MLA31734104051_082019-O.jpg",
    price: 350,
    expired: false,
    detail: "Largo, color negro, chupín",
    stock: 10,
    category: "Ropa",
  },
  {
    id: 3,
    title: "Zapatos",
    img: "https://cdn.shopify.com/s/files/1/0517/6282/3347/products/HCAC01004011-01_900x.jpg?v=1644843629",
    price: 400,
    expired: true,
    detail: "Color negro, material de cuero con suela flexible ",
    stock: 4,
    category: "Calzado",
  },
  {
    id: 4,
    title: "Campera",
    img: "https://urquizamotos.com.ar/63050-large_default/campera-de-turismo-4-estaciones-held-renegade-negro-gris.jpg",
    price: 380,
    expired: true,
    detail: "Semi deportiva, ligera con diseño",
    stock: 10,
    category: "Ropa",
  },
  {
    id: 5,
    title: "Lentes de Sol",
    img: "https://www.opticapaesani.com.ar/media/catalog/product/cache/8/image/9df78eab33525d08d6e5fb8d27136e95/3/0/3025_q.jpg",
    price: 120,
    expired: false,
    detail: "Estilo Aviator",
    stock: 8,
    category: "Accesorios",
  },
  {
    id: 6,
    title: "Gorra",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_989432-MLA48089545386_112021-F.webp",
    price: 110,
    expired: true,
    detail: "Hip Hop Style",
    stock: 15,
    category: "Accesorios",
  },
];

export function getTienda() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000);
  });
}

export function getUnaPrenda(idParams) {
  return new Promise((resolve) => {
    let cursoReq = data.find((item) => {
      return item.id === Number(idParams);
    });
    setTimeout(() => resolve(tiendaReq), 1000);
  });
}

export function getTiendaByCategory(idCategoryParams) {
  return new Promise((resolve) => {
    let arrayFilterTiendas = data.filter(
      (item) => item.category === idCategoryParams
    );
    setTimeout(() => resolve(arrayFilterTiendas), 1000);
  });
}
