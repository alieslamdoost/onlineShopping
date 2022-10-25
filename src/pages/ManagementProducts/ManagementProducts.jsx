import React from "react";
import ManagementHeader from "../../layout/ManagementHeader/ManagementHeader";
import ProductsPanel from "../../components/ProductsPanel/ProductsPanel";

function ManagementProducts(props) {
  return (
    <div>
      <ManagementHeader />
      <ProductsPanel />
    </div>
  );
}

export default ManagementProducts;
