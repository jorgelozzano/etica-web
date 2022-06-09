import React from "react";
import styles from "../styles/etica.module.css";
import lid1 from "../assets/lid1.jpg";
import lid2 from "../assets/lid2.jpg";
import lid3 from "../assets/lid3.jpg";
import lid4 from "../assets/lid4.jpg";
import lid5 from "../assets/lid5.jpg";
import lid6 from "../assets/lid6.jpg";
import eticaPro from "../assets/eticaPro.png";
import eticaEmpresarial from "../assets/eticaEmpresarial.jpg";

const Etica = () => {
  return (
    <div className={styles["etica-wrapper"]}>
      <div className={styles["block-1"]}>
        <h1>Ética Profesional</h1>
        <p style={{ textAlign: "justify" }}>
          La elección de esta empresa está justificada principalmente en su
          ética de trabajo, así como la huella que ha dejado. Comenzando por su
          origen, una empresa nacida en Latinoamérica que ha logrado poco a poco
          consolidarse entre una de las más importantes del mundo, compitiendo a
          gran nivel tecnológico con las de América del Norte, Asia y Europa.
          Además, mencionando su ética de trabajo, esta empresa tiene valores
          muy importantes que radican en el origen de la empresa, buscando
          igualdad de género, de condiciones y que se incluyan amigablemente con
          lo que es la globalización. 2 No sólo eso, sino también su enfoque que
          es innovador pero que busca tener un futuro sostenible y teniendo en
          cuenta la gran importancia que tiene el cuidado del medio ambiente y
          de los recursos, pero en especial de las personas. Finalmente, todos
          estos aspectos se ven respaldados no sólo por políticas bonitas en su
          página, sino por hechos, demostrando constantemente el cómo ha ido
          evolucionando y creciendo, pero manteniéndose apegado a sus principios
          y demostrando que más que una empresa es una comunidad que busca
          contagiar todos sus valores y metas por la mejora y crecimiento de la
          sociedad y las empresas.
        </p>
        <img
          src={eticaPro}
          style={{
            width: "30rem",
            borderRadius: "12px",
            margin: "2rem auto",
            marginBottom: "6rem",
          }}
          alt=""
        />
      </div>
      <div className={styles["block-2"]}>
        <h1>Ética Empresarial</h1>
        <p style={{ textAlign: "justify" }}>
          La ética empresarial de Globant está enfocada en el tercer principio
          de su código de ética, en el que se establecen distintas políticas y
          acciones las cuales deben seguirse por parte de empleados, directores,
          ejecutivos, inversionistas, es decir por parte de los stakeholders de
          la empresa, para que estos no incurran en faltas de la ética
          empresarial de Globant. El tercer principio del código de ética se
          basa en el compromiso con Globant, en el cual se establecen las
          siguientes prácticas:
        </p>
        <br />
        <ul>
          <li>
            <p>
              Conflictos de interés: Evitar situaciones de conflicto entre
              intereses personales y los de Globant.
            </p>
          </li>
          <li>
            <p>
              Negocios externos u otros intereses: No se deben perseguir
              oportunidades que compitan o vayan en contra de Globant.
            </p>
          </li>
          <li>
            <p>
              Relaciones Personales: No permitir que el trabajar con familiares
              o personas con las que se tengan lazos personales, influya en las
              responsabilidades de trabajo, evitando favoritismos, apariencias,
              etc.
            </p>
          </li>
          <li>
            <p>
              Intereses financieros: No presentar problemas o intereses
              financieros con stakeholders.
            </p>
          </li>
          <li>
            <p>
              Protección y uso adecuado de los recursos: los recursos de la
              empresa no deben utilizarse para motivos personales o externos a
              la empresa.
            </p>
          </li>
          <li>
            <p>
              Propiedad intelectual: proteger todo tipo de información
              perteneciente a Globant y colaboradores frente a situaciones
              ilegitimas o inapropiadas.
            </p>
          </li>
          <li>
            <p>
              Uso de fondos: mantener un buen y correcto manejo del dinero y
              fondos personales y de la empresa.
            </p>
          </li>
          <li>
            <p>
              Retención de obligaciones y devolución de documentos: siempre se
              deben seguir los lineamientos de retención de documentos que
              aplica a locaciones y proyectos.
            </p>
          </li>
          <li>
            <p>
              Obligaciones de empleado en formación: cumplir obligaciones
              legales con empleados en formación.
            </p>
          </li>
          <li>
            <p>
              Mantenimiento de registros: precisión en la realización de
              registros y juicios que se establezcan.
            </p>
          </li>
          <li>
            <p>
              Uso apropiado y protección de la imagen de Globant: no violar los
              derechos de imagen y privacidad externamente o en redes sociales.
            </p>
          </li>
          <li>
            <p>
              Tráfico de información: mostrar confianza y confidencialidad de la
              información de Globant.
            </p>
          </li>
          <li>
            <p>
              Acuerdos políticos y gubernamentales: participar en elecciones,
              auditorías o investigaciones gubernamentales.
            </p>
          </li>
        </ul>
        <br />
        <img
          src={eticaEmpresarial}
          style={{
            width: "30rem",
            borderRadius: "12px",
            margin: "2rem auto",
            marginBottom: "6rem",
          }}
          alt=""
        />
      </div>
      <div className={styles["block-3"]}>
        <h1>Ética En El Ejercicio Del Liderazgo</h1>
        <ul className={styles["lista-wrapper"]}>
          <div className={styles["reconocimiento"]}>
            <img src={lid1} alt="" />
          </div>
          <div className={styles["reconocimiento"]}>
            <img src={lid2} alt="" />
          </div>
          <div className={styles["reconocimiento"]}>
            <img src={lid3} alt="" />
          </div>
          <div className={styles["reconocimiento"]}>
            <img src={lid4} alt="" />
          </div>
          <div className={styles["reconocimiento"]}>
            <img src={lid5} alt="" />
          </div>
          <div className={styles["reconocimiento"]}>
            <img src={lid6} alt="" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Etica;
