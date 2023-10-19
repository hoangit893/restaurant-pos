import React, { useContext } from "react";
import "./style.css";
import { CurrentTableContext } from "../../App";
import Button from "../subComponents/Button";

function Menu({ menu, handleOrder }) {
  const currentTable = useContext(CurrentTableContext);
  const handleClick = (event) => {
    let idAdd = event.target.value;
    handleOrder(idAdd, currentTable);
  };

  return (
    <>
      <div className="title">
        <h1> Menu</h1>
      </div>
      <div id="menu_list">
        {menu.map((food, index) => {
          return (
            <div
              key={food.id}
              className="food"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
              <div
                style={{
                  position: "relative",
                  top: "50%",
                  zIndex: 10,
                }}>
                <Button
                  value={food.id}
                  label={"ADD"}
                  b_color="#b1ced4"
                  b_height={40}
                  onClick={handleClick}
                  b_width={90}></Button>
              </div>
              <div style={{ position: "relative" }}>
                <img
                  style={{
                    borderTopLeftRadius: "30px",
                    borderTopRightRadius: "30px",
                    borderBottomLeftRadius: "20px",
                    borderBottomRightRadius: "20px",
                    width: 280,
                    height: 280,
                  }}
                  src={food.image}
                  alt=""
                />
                <div
                  style={{
                    verticalAlign: "middle",
                    textAlign: "center",
                    height: "50px",
                    width: "100%",
                    borderBottomLeftRadius: "20px",
                    borderBottomRightRadius: "20px",
                    background: "#EAF0F0",
                    position: "absolute",
                    bottom: "0%",
                  }}>
                  <div
                    style={{ top: "20%", position: "relative", fontSize: 20 }}>
                    {food.food} - {food.price}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Menu;
