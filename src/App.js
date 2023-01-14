import "./App.css";
import perfil from "./images/perfil.jpg";
import twitter from "./images/twitter.svg";
import linkedin from "./images/in.svg";
import github from "./images/github.svg";

function App() {
  return (
    <div id="root">
      <div id="header">
        <div id="photo">
          <img id="yo" src={perfil} width="180px"/>
        </div>
        <div id="info-contact">
          <div id="my-description">
            <div id="description-container">
              <h1>Matias Barrios</h1>
              <h2><span id="fullstack">Full-Stack</span> developer</h2>
            </div>
            <div id="social">
              <a href="https://twitter.com/Mbrrsv" target="_blank">
                <img className="redes" src={twitter} width="25px"/>
              </a>
              <a href="https://www.linkedin.com/in/matias-gabriel-barrios-vazquez/" target="_blank">
                <img className="redes" src={linkedin} width="25px"/>
              </a>
              <a href="https://github.com/Matias-Py" target="_blank">
                <img className="redes" src={github} width="25px"/>
              </a>
            </div>
          </div>
          <div id="bio">
            <p>Hola👋, Soy estudiante de la licenciatura en gestión de tecnologías de la información y desarrollador web Full-Stack, me especializo en tecnologías javascript.</p>
            <h3>Skills ✨</h3>
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Node</li>
              <li>MongoDB</li>
              <li>Express</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="portafolio-header">
        <h3>Proyectos🚀</h3>
      </div>
      <div id="proyectos">
        <div className="proyecto">
          <a className="link-proyecto" href="https://guia-para-estudiantes.vercel.app/" target="_blank">
            <div className="descripcion">
              <h4>Plan de estudios interactivo 📚</h4>
              <p>Es una página creada con react que se conecta a una API creada con node.js y express que devuelve todas las materias de una carrera e información sobre cada materia </p>
            </div>
          </a>
        </div>
        <div className="proyecto">
        <a className="link-proyecto" href="https://matias-py.github.io/Paises/" target="_blank">
          <div className="descripcion">
            <h4>PaisesApp 🌎</h4>
            <p>Es una página creada con react que se conecta una API y devuelve información básica del país buscado por el usuario </p>
          </div>
        </a>
        </div>
        <div className="proyecto">
        <a className="link-proyecto" href="https://matias-py.github.io/horoscopo/" target="_blank">
          <div className="descripcion">
            <h4>Horóscopo 🌌</h4>
            <p>Una simple página sobre el horóscopo</p>
          </div>
        </a>
        </div>
      </div>
    </div>
  );
}

export default App;
