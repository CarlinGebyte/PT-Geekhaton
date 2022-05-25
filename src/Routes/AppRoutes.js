import React from "react";
import Order from "../components/Order";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ListCoctel from "../components/ListCoctel";
import NavigationBar from "../components/NavigationBar";

function AppRoutes() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ListCoctel />} />
        <Route path="/order" element={<Order />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
