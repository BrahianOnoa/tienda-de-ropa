import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav>
      <ul>
        <a href="#">
          <li>Colección ropa de verano</li>
        </a>
        <li>Pantalones</li>
        <li>Zapatos</li>
        <li>Remeras y camisas</li>
        <li>Accesorios</li>
      </ul>
      <CartWidget />
    </nav>
  );
}
// export NavBar -> Importarlo desde App -> renderizarlo
export default NavBar;
