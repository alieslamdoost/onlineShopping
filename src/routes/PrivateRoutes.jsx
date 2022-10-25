import React from "react";
import { Routes, Route } from "react-router-dom";
import ManagementOrder from "../pages/ManagementOrder/ManagementOrder";
import ManageMentPriceAndExist from "../pages/ManageMentPriceAndExist/ManageMentPriceAndExist";
import ManagementProducts from "../pages/ManagementProducts/ManagementProducts";

function PrivateRoutes(props) {
  return (
    <Routes>
      <Route path="/ManagementProducts" element={<ManagementProducts />} />
      <Route
        path="/ManageMentPriceAndExist"
        element={<ManageMentPriceAndExist />}
      />
      <Route path="/ManagementOrder" element={<ManagementOrder />} />
    </Routes>
  );
}

export default PrivateRoutes;
