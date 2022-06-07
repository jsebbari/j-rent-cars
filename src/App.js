import { Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Products from "./screens/Products";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import "./App.css"
import app from "./firebase.config"

function App() {
  return (


    <div className="App">
        <Navigation/>
         <Routes>
              <Route exact path=  "/" element={<Home />}/> 
             <Route exact path=  "vehicules" element={<Products />} />
             <Route exact path=  "contact" element={<Contact />} />
         </Routes>



    </div>
  
  );
}

export default App;
