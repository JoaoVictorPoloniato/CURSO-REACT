import React from 'react';
import ReactDOM from 'react-dom/client'; // Importe createRoot de "react-dom/client"
import './styles/global-styles.css';
import Home from './Home/index'; // Supondo que o componente principal seja Home

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
