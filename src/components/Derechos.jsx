import React from "react";
import styles from "../styles/derechos.module.css";
import dh1 from '../assets/dh1.jpeg';
import dh2 from '../assets/dh2.jpeg';
import dh3 from '../assets/dh3.jpeg';
import dh4 from '../assets/dh4.jpeg';
import dh5 from '../assets/dh5.jpeg';

const Derechos = () => {
  return (
    <div className={styles["derechos-wrapper"]}>
      <div className={styles["text"]}>
        <h1 className={styles["title"]}>Observancia de derechos humanos</h1>
        <p className={styles["caption"]}>
          Globant alienta a sus trabajadores a participar en la política
          electoral en los distintos países cuando corresponda, dicha actividad
          debe ocurrir estrictamente en una capacidad individual y privada, y no
          en nombre de la Compañía. Globant cree en ser un ciudadano corporativo
          responsable que asigna un gran valor al respeto por los individuos y
          la sostenibilidad. Globant se compromete a tratarlo con dignidad y
          equidad, a proporcionar un ambiente de trabajo seguro, libre de acoso
          y discriminación, a proteger su derecho a la privacidad en la mayor
          medida posible y a promover conductas éticas y legales. Globant
          defiende los derechos humanos en todas las operaciones a nivel global,
          en línea con el Pacto Global de Naciones Unidas y los principios
          establecidos por la Organización Mundial del Trabajo. Los Globers
          tienen derecho a salarios y horarios justos, de conformidad con la
          legislación local, y a trabajar en un ambiente libre de
          discriminación. Globant no hace uso de trabajo infantil (es decir, con
          personas por debajo de la edad mínima para trabajar, de acuerdo con la
          legislación y las normas aplicable) o trabajo forzoso (mano de obra en
          prisión, en condiciones de servidumbre, de esclavitud o militar).
          Tampoco justifica cualquier forma de tráfico humano y no trabaja con
          terceros que sí lo hagan.
        </p>
      </div>
      <div className={styles['album']}>
        <img src={dh1} alt="img" />
        <img src={dh2} alt="img" />
        <img src={dh3} alt="img" />
        <img src={dh4} alt="img" />
        <img src={dh5} alt="img" />
      </div>
    </div>
  );
};

export default Derechos;
