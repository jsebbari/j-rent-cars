import { Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Products from "./screens/Products";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import ErrorPage from "./screens/ErrorPage";
import PrivateHome from "./components/PrivateHome"
import "./App.css"
import app from "./firebase/firebase.config"
import ConnectUser from "./screens/ConnectUser";
import SendCarsToFirebase from "./sendcarstofirebase/SendCarsToFirebase";

function App() {
  return (


    <div className="App">
        <Navigation/>
         <Routes>
            <Route exact path=  "/" element={<Home />} /> 
             <Route exact path= "vehicules" element= {<Products />} />
             <Route exact path= "contact" element= {<Contact />}/>
             <Route exact path= "connexion" element= {<ConnectUser/>}/>
             <Route exact path= "/mon-compte" element={<PrivateHome/>}/>
             <Route exact path= "/send-cars-to-firebase" element={<SendCarsToFirebase/>}/>
             <Route exact path= "/*" element={<ErrorPage />}/>
         </Routes>



    </div>
  
  );
}

export default App;
