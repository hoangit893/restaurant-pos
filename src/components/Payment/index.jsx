import React from "react";
import Button from "../subComponents/Button";

function Payment({ tableList, currentTable, submitOrder }) {
  return (
    <>
      <div
        style={{
          color: "var(--green-green-600, #2C3832)",
          fontFamily: "Quicksand",
          fontSize: "1.875rem",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
          textTransform: "uppercase",
        }}>
        PAYABLE AMONUT :
      </div>
      <div
        style={{
          color: "var(--salmon-salmon, #D89F65)",
          fontFamily: "Quicksand",
          fontSize: "1.875rem",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
          textTransform: "uppercase",
        }}>
        ${tableList[currentTable].total}
      </div>
      <Button
        b_height="3.625rem"
        b_width="10.9375rem"
        label="PAY NOW"
        b_color="#B1CED4"
        onClick={submitOrder}></Button>
    </>
  );
}

export default Payment;
