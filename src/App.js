import NavBar from "./components/NavBar.js";
import "./App.css";
import AboutMe from "./components/AboutMe.js";
import MyDetails from "./components/MyDetails.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";

function App() {
  return (
    <div>
      <div className="empty"></div>
      <div>
        <NavBar />
        <AboutMe />
        <MyDetails />
        <Skills/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
