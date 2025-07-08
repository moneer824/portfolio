import NavBar from "./components/NavBar.js";
import "./App.css";
import AboutMe from "./components/AboutMe.js";
import MyDetails from "./components/MyDetails.js";
import Skills from "./components/Skills.js";
import ProjectComponents from "./components/ProjectComponents.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div id="HOME">
      <NavBar />
      <div className="nav-offset"></div>
      <AboutMe />
      <MyDetails />
      <Skills />
      <ProjectComponents />
      <Contact />
    </div>
  );
}

export default App;
