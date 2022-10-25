import React from "react";
import ManagementHeader from "../../layout/ManagementHeader/ManagementHeader";
import OrderPanel from "../../components/OrderPanel/OrderPanel";

function ManagementOrder(props) {
  return (
    <div>
      <ManagementHeader />
      <OrderPanel />
    </div>
  );
}

export default ManagementOrder;
