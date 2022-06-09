import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <h1>Reporte Globant</h1>
      <div className={styles["links-wrapper"]}>
        <Link  to="/home">Inicio</Link>
        <Link to="/etica">Ética</Link>
        <Link to="/responsabilidad">Responsabilidad</Link>
        <Link to="/derechos-humanos">Derechos humanos</Link>
        <Link to="/Contacto">Contacto</Link>
      </div>
    </header>
  );
};

export default Header;
