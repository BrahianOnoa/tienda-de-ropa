import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartWidget from "./components/NavBar/CartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Componente
function App() {
  let estilosTienda = { backgroundColor: "lightgray" };

  return (
    <div style={estilosTienda}>
      <CartWidget />
      <ItemListContainer greeting="Bienvenidos a la tienda Arturo Calle" />
    </div>
  );
}

export default App;
