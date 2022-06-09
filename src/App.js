import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';


/*
Inicio: Objetivo, info gral de Globant, etiqueta, integrantes
--------------------------------------------------------------------------------------------------------
apartado etica: 3 secciones con titulo,descripcion, texto e imagenes. 
En etica liderzgo listas de los reconocimientos.
En etica profesional meter la justificacion, dedscr. gral de etica en Globant.
Etica empresarial descripcion y una lista.
--------------------------------------------------------------------------------------------------------
Responsabilidad Social: Imagenes de globant de BeKind, Texto, descripciones
--------------------------------------------------------------------------------------------------------
Derecho Humanos: Titulo, texto y hasta abajo 5 imgs de Globant conviviendo, algo asi.
--------------------------------------------------------------------------------------------------------
Contacto: Subject, message, Selector del area de origen{Admin,Mkt,RH,IT,Web}
*/

function App() {
  return (
    <div className='main-wrapper'>
      <Header className="header" />
      <Outlet />
      <Footer className="footer" />
    </div>
  );
}

export default App;
