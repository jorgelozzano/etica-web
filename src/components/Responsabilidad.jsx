import React from "react";
import styles from "../styles/responsabilidad.module.css";
import bk1 from '../assets/bk1.jpeg';
import bk2 from '../assets/bk2.jpeg';
import bk3 from '../assets/bk3.jpeg';
import bk4 from '../assets/bk4.png';

const Responsabilidad = () => {
  return (
    <div className={styles["responsabilidad-wrapper"]}>
      <h1>Be Kind!</h1>
      <p className={styles["caption"]}>
        Be Kind es la clave principal del RSE de GLOBANT, en donde la empresa
        induce a un cambio y generar un impacto positivo en nuestra realidad y
        de nuestro alrededor, en el cual se llama a tomar lugar y tener acciones
        positivas con uno mismo, con todos los compañeros y por supuesto con la
        humanidad y el medio ambiente. Esta le ha permitido a Globant obtener
        una gran variedad de certificaciones y reconocimientos como Best CEOs
        for Women 2019, Best Leadership Teams 2019, logro de la Neutralidad de
        Carbono y Firma un Compromiso de Science-Based Targets para Reforzar su
        Dedicación a Luchar contra el Cambio Climático, entre otros. Globant
        promueve una cultura de bienestar que permite a los Globers liberar todo
        su potencial. Tu cuerpo, mente y espíritu están conectados con el
        presente, mientras trabajan para cambiar el futuro de los negocios y
        construir la mejor versión de ellos mismo. La diversidad y la inclusión
        son dos pilares claves para Globant. La tecnología les impulsa a innovar
        constantemente, y esto se logra conectando diferentes puntos de vista.
        Globant trabaja en iniciativas que promueven la igualdad de género,
        contrataciones inclusivas y propuestas para equilibrar la vida y el
        trabajo. Globant ayuda a las organizaciones a prosperar cambiando la
        forma en que se relacionan con sus clientes y empleados. Esto mediante
        la unión y la adopción de una visión común, superando desafíos éticos e
        incorporando prácticas inclusivas. Globant se considera un equipo el
        cual se esfuerza para transformar la compañía en un agente de cambio
        para la sostenibilidad, esto trabajando con sus empleados, clientes y
        proveedores para liderar la transición hacia una economía verde.
      </p>
      <div className={styles["album-grid"]}>
        <div className={styles["album-block"]}>
          <img src={bk1} alt="img" />
          <p>Be kind to your peers</p>
        </div>
        <div className={styles["album-block"]}>
          <img src={bk2} alt="img" />
          <p>Be kind to yourself</p>
        </div>
        <div className={styles["album-block"]}>
          <img src={bk3} alt="img" />
          <p>Be kind to the planet</p>
        </div>
        <div className={styles["album-block"]}>
          <img src={bk4} alt="img" />
          <p>Be kind to humanity</p>
        </div>
      </div>
    </div>
  );
};

export default Responsabilidad;
