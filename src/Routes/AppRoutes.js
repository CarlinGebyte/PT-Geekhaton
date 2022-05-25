import React from "react";
import Order from "../components/Order";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" component={} /> */}
        <Route path="/order" component={Order} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
