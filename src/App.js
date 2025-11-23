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
              <a href="https://twitter.com" target="_blank">
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
            <p>Ingeniero de Software enfocado en el desarrollo de arquitecturas escalables y alto rendimiento. Especializado en el ecosistema JavaScript (Node.js/React) y diseño de bases de datos relacionales y no relacionales. Mi enfoque prioriza la seguridad, la optimización de recursos y la implementación de buenas prácticas de ingeniería como TDD y CI/CD. Orientado a la construcción de soluciones robustas que resuelven problemas de negocio complejos.</p>
            <h3>Habilidades</h3>
            <div id="skills">
              <button className="skill">Html5</button>
              <button className="skill">Css</button>
              <button className="skill">Javascript</button>
              <button className="skill">Node</button>
              <button className="skill">React</button>
              <button className="skill">MongoDB</button>
              <button className="skill">Express</button>
              <button className="skill">PostgreSQL</button>
            </div>
          </div>
        </div>
      </div>
      <div id="portafolio-header">
        <h3>Proyectos</h3>
      </div>
      <div id="proyectos">
        <div className="proyecto">
          <a className="link-proyecto" href="https://guia-para-estudiantes.vercel.app/" target="_blank">
            <div className="descripcion">
              <h4>Plan de estudios interactivo 📚</h4>
              <p>Es una página creada con react que se conecta a una API creada con node.js y express que devuelve un listado de todas las materias de una carrera además de información sobre cada materia </p>
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
        <a className="link-proyecto" href="https://the-simpsons-quotes-six.vercel.app/" target="_blank">
          <div className="descripcion">
            <h4>Simpsons quotes</h4>
            <p>Es una página creada con react que se conecta una API y devuelve frases de los personajes de los Simpsons </p>
          </div>
        </a>
        </div>
        <div className="proyecto">
        <a className="link-proyecto" href="https://horoscopo-rosy.vercel.app/" target="_blank">
          <div className="descripcion">
            <h4>Horóscopo 🌌</h4>
            <p>Una pagina creada con react que te devuelve el horóscopo </p>
          </div>
        </a>
        </div>
      </div>
    </div>
  );
}

export default App;
