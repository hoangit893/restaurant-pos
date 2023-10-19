import React, { useContext } from "react";
import OrderDetail from "../OrderDetail";
import { CurrentTableContext } from "../../App";
import Payment from "../Payment";

import "./style.css";

const RightSide = ({ path, tableList, handlePlaceOrder, handleClearItem }) => {
  const currentTable = useContext(CurrentTableContext);

  return (
    <>
      <div id="RightSide"></div>
      {(path === "menu" || path === "home") && (
        <OrderDetail
          tableList={tableList}
          currentTable={currentTable}
          handlePlaceOrder={handlePlaceOrder}
          handleClearItem={handleClearItem}></OrderDetail>
      )}

      {path === "payment" && (
        <Payment tableList={tableList} currentTable={currentTable}></Payment>
      )}
    </>
  );
};

export default RightSide;
