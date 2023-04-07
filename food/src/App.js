import React from "react";
import Home from "./components/Home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MealInfo from "./components/MealInfo/MealInfo";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:MealId" element={<MealInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
