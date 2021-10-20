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
     <Navbar/>
     </div>
     <Home/>
     <About/>
    </div>
  );
}

export default App;
