import React from "react";
import useInput from "../../../hooks/useInput";
import "./style.css";
import lookup from "./assets/look-up.svg";
const SearchBar = () => {
  const [text, onChange] = useInput();

  return (
    <div className="search-bar-container">
      <form action="" className="search-bar">
        <input
          style={{
            width: 300,
            border: "transparent",
          }}
          value={text}
          onChange={onChange}
          placeholder="Search product or any order... "
        />
        <button type="submit">
          <img width={22} height={22} src={lookup} alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
