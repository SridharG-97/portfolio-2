import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/Components/Navbar/index";
import Home from "./Components/Views/Home/Home";
import About from "./Components/Views/About/About";


function App() {
  return (
    <div className="App">
      <div className="Nav-App">
      
      <Navbar />
      </div>
      <div className="sections">
         <div className="Home-App">
      
          <Home />
        </div> 
       <div className="About-App">
        
          < About/>
        </div>
      </div>
    </div>
  );
}

export default App;
