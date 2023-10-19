import React, { useContext } from "react";
import { TableContext } from "../../App";
import table_icon_free from "../../assets/pos-table.svg";
import table_icon_ordered from "../../assets/pos-table-ordered.svg";
import "./style.css";

function TableList({ handleCurrentTable }) {
  const tableState = useContext(TableContext);
  return (
    <>
      <div className="title">
        <h1> Table</h1>
      </div>
      <div id="table_list">
        {tableState.map((table, index) => {
          return (
            <div
              className="table"
              key={table.id}
              onClick={() => handleCurrentTable(index)}>
              <img
                src={
                  tableState[index].state ? table_icon_ordered : table_icon_free
                }
                alt=""
              />
              <span>{table.id}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TableList;
