import React, { useContext } from "react";
import "./style.css";
import { MenuBtnContext } from "../../App";
import { PathContext } from "../../App";

function Left({ handleSelectedMenu, handlePath }) {
  const listPage = useContext(MenuBtnContext);
  const path = useContext(PathContext);

  const handleClick = ({ target }) => {
    handleSelectedMenu(target);
    handlePath(target.value);
  };

  return (
    <div id="left_container">
      {listPage.map((page, index) => {
        return (
          <button
            key={index}
            value={page.label}
            onClick={handleClick}
            className="menu_btn"
            id={path === page.label ? "active" : "null"}>
            <svg
              value={page.label}
              style={{
                marginBottom: "10px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="24"
              viewBox="0 0 28 24"
              fill="none">
              <path
                d={page.icon}
                fill={page.isSelected ? "#2E636E" : "#D8DBD9"}
              />
            </svg>
            <span value={page.label}>{page.label}</span>
          </button>
        );
      })}
    </div>
  );
}
export default Left;
