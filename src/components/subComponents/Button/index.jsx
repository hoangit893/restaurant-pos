import React from "react";
import "./style.css";
function Button({ b_width, b_height, label, img, b_color, onClick, value }) {
  return (
    <div
      style={{
        width: b_width,
        height: b_height,
        backgroundColor: b_color,
      }}
      className="button_container">
      {img && (
        <img
          style={{
            top: "50%",
            left: "15%",
            transform: "translateY(-50%)",
            position: "relative",
          }}
          width={22}
          height={22}
          src={img}
          alt=""
        />
      )}

      <button
        style={{
          position: "relative",
          width: 100,
          height: 100,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          backgroundColor: "transparent",
          border: "transparent",
          "&::hover": {
            color: "black",
          },
        }}
        value={value}
        className={"button"}
        onClick={onClick}>
        {label}
      </button>
    </div>
  );
}

export default Button;
