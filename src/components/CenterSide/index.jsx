import React from "react";
import "./style.css";
import Menu from "../Menu/Menu";
import TableList from "../TableList";
import OrderDetail from "../OrderDetail";

const CenterSide = ({
  tableList,
  currentTable,
  handleCurrentTable,
  handleClearItem,
  menu,
  handleOrder,
  path,
}) => {
  return (
    <div id="center">
      {path === "menu" && <Menu menu={menu} handleOrder={handleOrder}></Menu>}
      {(path === "home" || path === "") && (
        <TableList
          currentTable={currentTable}
          handleCurrentTable={handleCurrentTable}></TableList>
      )}
      {path === "payment" && (
        <OrderDetail
          tableList={tableList}
          currentTable={currentTable}
          path={path}
          handleClearItem={handleClearItem}></OrderDetail>
      )}
    </div>
  );
};

export default CenterSide;
