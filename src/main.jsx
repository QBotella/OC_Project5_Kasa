import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import HousingDetail from "./pages/HousingDetail"
import About from "./pages/About"
import Header from "./layout/Header"
import Error from "./pages/Error"
import "./assets/styles/index.scss"
import datas from "./data/datas.json"
import Footer from "./layout/Footer"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home datas={datas} />} />
          <Route path="/:id" element={<HousingDetail datas={datas} />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
)
