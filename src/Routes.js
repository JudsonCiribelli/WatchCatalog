import { BrowserRouter, Route, Routes } from "react-router-dom";
//Pages
import Details from "./Pages/Details/Details.js";
import Home from "./Pages/Home/Home.js";
//Components
import Header from "./Components/Header/Header-Component.js";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
