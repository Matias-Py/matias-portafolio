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
              <img className="redes" src={twitter} width="25px"/>
              <img className="redes" src={linkedin} width="25px"/>
              <img className="redes" src={github} width="25px"/>
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
          <h4>PelisApp 📺</h4>
          <button>
            <a href="https://matias-py.github.io/PelisApp/" target ="_blank">Ver proyecto</a>
          </button>
          <button>
            <a>Ver codigo del proyecto</a>
          </button>
        </div>
        <div className="proyecto">
          <h4>PaisesApp 🌎</h4>
          <button>
            <a href="https://matias-py.github.io/Paises/" target="_blank">Ver proyecto</a>
          </button>
          <button>
            <a>Ver codigo del proyecto</a>
          </button>
        </div>
        <div className="proyecto">
          <h4>Horóscopo 🌌</h4>
          <button>
            <a href="https://matias-py.github.io/horoscopo/" target="_blank">Ver proyecto</a>
          </button>
          <button>
            <a>Ver codigo del proyecto</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
