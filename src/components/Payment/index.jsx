import React from "react";

function Payment({ tableList, currentTable }) {
  return <div> Total : {tableList[currentTable].total}</div>;
}

export default Payment;
