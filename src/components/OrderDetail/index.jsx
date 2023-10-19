import React from "react";
import Button from "../subComponents/Button";
// import pos_add from "../../assets/pos-add.svg";
import "./style.css";
import Item from "../subComponents/Item";

function OrderDetail({
  tableList,
  currentTable,
  handleClearItem,
  handlePlaceOrder,
  finishOrder,
  path,
}) {
  return (
    <div id="order_details">
      <div className="title" style={{ padding: 0 }}>
        <h1 style={{ left: "0px", fontSize: "35px" }}>Order Details</h1>
        <div>
          <span style={{ fontSize: 15 }}>
            Seletected Table :{" "}
            {currentTable !== null ? tableList[currentTable].id : ""}
          </span>
        </div>
      </div>

      {currentTable != null ? (
        tableList[currentTable].order.map((food, index) => {
          return (
            <Item
              key={food.id}
              item={tableList[currentTable].order[index]}
              handleClearItem={handleClearItem}></Item>
          );
        })
      ) : (
        <>
          <div>No table order selected</div>
        </>
      )}

      {!(
        (currentTable != null && path === "payment") ||
        tableList[currentTable].state
      ) && (
        <div
          style={{
            position: "relative",
            left: "27.5%",
          }}>
          <Button
            b_height="3.625rem"
            b_width="10.9375rem"
            label="PLACE ORDER"
            b_color="#B1CED4"
            onClick={handlePlaceOrder}></Button>
        </div>
      )}
      {currentTable != null && tableList[currentTable].state && (
        <div
          style={{
            position: "relative",
            left: "27.5%",
          }}>
          <Button
            b_height="3.625rem"
            b_width="10.9375rem"
            label="FINISH ORDER"
            b_color="#B1CED4"
            onClick={finishOrder}></Button>
        </div>
      )}
    </div>
  );
}

export default OrderDetail;
