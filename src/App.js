import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./screens/Products";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import "./App.css"

function App() {
  return (


    <div className="App">
        <Navbar/>
         <Routes>
              <Route exact path=  "/" element={<Home />}/> 
             <Route exact path=  "vehicules" element={<Products />} />
             <Route exact path=  "contact" element={<Contact />} />
         </Routes>



    </div>
  
  );
}

export default App;
