import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext';
import {AllCarsContextProvider} from './context/AllCarsContext'



ReactDOM.render(



  <BrowserRouter>
      <React.StrictMode>
        <AllCarsContextProvider>
          <AuthContextProvider>
              <App/>
          </AuthContextProvider>
        </AllCarsContextProvider>
      </React.StrictMode>
  </BrowserRouter>,

  document.getElementById('root')
);


reportWebVitals();
