import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import ImageHd from "./Pages/Imagehd";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/imagehd" element={<ImageHd />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
