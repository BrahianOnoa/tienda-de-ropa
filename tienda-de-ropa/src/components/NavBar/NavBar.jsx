import React from "react";
import "./navbar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="nav-menu">
        <Link to="/">Inicio </Link>
        <Link to="/tienda">Tienda</Link>
        <Link to="/category/ropa">Ropa</Link>
        <Link to="/category/accesorios">Accesorios</Link>
        <CartWidget />
      </ul>
    </div>
  );
}

export default NavBar;
