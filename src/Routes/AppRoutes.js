import React from "react";
import Order from "../components/Order";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListCoctel from "../components/ListCoctel";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListCoctel />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
