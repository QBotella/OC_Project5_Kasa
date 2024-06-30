import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fiche_Logement from "./pages/Fiche_Logement";
import A_Propos from "./pages/A_Propos";
import Header from "./layout/Header";
import Error from "./pages/Error";
import "./assets/styles/index.scss";
import datas from "./data/datas.json"; // Assurez-vous que le chemin est correct

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home datas={datas} />} />
        <Route path="/Fiche_logement" element={<Fiche_Logement />} />
        <Route path="/A_Propos" element={<A_Propos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);