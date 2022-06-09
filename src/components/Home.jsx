import React from "react";
import styles from "../styles/home.module.css";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className={styles["home-wrapper"]}>
      <div className={styles["img-wrapper"]}>
        <img src={logo} alt="globant_logo" />
      </div>
      <div className={styles["main-caption"]}>
        <h1>Investigación: Globant</h1>
        <p>
          En esta pagina detallaremos diferentes puntos en el ámbito ético de la
          empresa de Globant. Cada una de las secciones del encabezado
          corresponden a los temas de interés que fueron estipulados en la
          actividad.
        </p>
      </div>
      <div className={styles["lists-wrapper"]}>
        <div className={styles["objetivo-wrapper"]}>
          <h1>Objetivo</h1>
          <p>
            Analizar los procederes éticos en las instituciones y organizaciones
            y vincular el tema con situaciones personales y de la vida diaria, a
            través de la investigación de una empresa relacionada con su carrera
            profesional (Globant) para exponer su conclusión y/o propuesta de
            mejora utilizando herramientas digitales innovadoras.
          </p>
        </div>
        <div className={styles["integrantes-wrapper"]}>
          <h1>Integrantes</h1>
          <ul>
            <li>
              <p>
                <p>Muñoz Ramírez Priscila</p>
              </p>
            </li>
            <li>
              <p>Chávez Del Toro Yared Said</p>
            </li>
            <li>
              <p>Hernández Díaz José Alejandro</p>
            </li>
            <li>
              <p>Lozano López Pinto Jorge Ernesto</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["info-wrapper"]}>
        <h1>Información General</h1>
        <p>
          Las revoluciones digitales y cognitivas están afectando la forma en que
          las empresas se conectan con los usuarios y empleados. Las empresas
          buscan simultáneamente impulsar sus experiencias de consumo y
          transformarse internamente. Globant es un juego puro en el espacio
          digital y cognitivo. Aprovechamos las últimas tecnologías y
          metodologías para ayudar a las organizaciones a transformarse en todos
          los aspectos. Queremos transformar el mundo, un paso a la vez.
          Prosperamos transformando organizaciones para un futuro digital y
          cognitivo, y soñamos con transformar nuestra industria con
          oportunidades de clase mundial para el talento en todo el mundo.
        </p>
      </div>
    </div>
  );
};

export default Home;
