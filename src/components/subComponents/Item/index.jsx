import React from "react";
import "./style.css";
function Item({ item, handleClearItem }) {
  return (
    <div
      className="item_container"
      style={{
        width: "50",
        height: "80%",
        backgroundColor: "#eaf0f0",
        padding: "0px 20px",
        margin: "30px 0",
        borderRadius: "20px",
        display: item.quality <= 0 ? "none" : "flex",
      }}>
      <div
        style={{
          position: "relative",
          width: 60,
          height: 60,
        }}>
        <img
          style={{
            borderRadius: "20px",
            position: "relative",
            width: 60,
            height: 60,
          }}
          src={item.image}
          alt=""
        />
      </div>
      <div
        style={{
          position: "relative",
          paddingTop: "10px",
          display: "flex",
          flexDirection: "column",
          width: 120,
          height: 100,
        }}>
        <span
          style={{
            fontSize: 35,
          }}>
          {item.food}
        </span>
        <span
          style={{
            fontSize: 20,
          }}>
          {item.price}
        </span>
      </div>

      <div
        style={{
          position: "relative",
          paddingTop: "10px",

          display: "flex",
          flexDirection: "column",
          width: 120,
          height: 100,
        }}>
        <span
          style={{
            fontSize: 35,
          }}>
          QTy: {item.quality}
        </span>
      </div>
      <svg
        onClick={() => {
          console.log("ok");
          handleClearItem(item.id);
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="36"
        viewBox="0 0 14 18"
        fill="none">
        <path
          d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3.46 8.88L4.87 7.47L7 9.59L9.12 7.47L10.53 8.88L8.41 11L10.53 13.12L9.12 14.53L7 12.41L4.88 14.53L3.47 13.12L5.59 11L3.46 8.88ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z"
          fill="#EC5A5A"
        />
      </svg>
    </div>
  );
}

export default Item;
