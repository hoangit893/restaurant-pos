import { Grid } from "@mui/material";
import "./App.css";

import Left from "./components/Left";
import TopSection from "./components/TopSection";
import CenterSide from "./components/CenterSide";
import RightSide from "./components/RightSide";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const MenuBtnContext = React.createContext();
export const TableContext = React.createContext();
export const CurrentTableContext = React.createContext();
export const PathContext = React.createContext();

function App() {
  const [listPage, setListPage] = useState([
    {
      label: "HOME",
      link: "/home",
      icon: "M14 3.79765L21 10.1506V21.1765H18.2V12.7059H9.8V21.1765H7V10.1506L14 3.79765ZM14 0L0 12.7059H4.2V24H12.6V15.5294H15.4V24H23.8V12.7059H28L14 0Z",
      isSelected: true,
    },
    {
      label: "MENU",
      link: "menu",
      icon: "M17.3756 2.66667L24.8889 9.10667V21.3333H3.11111V2.66667H17.3756ZM17.3756 0H3.11111C1.4 0 0 1.2 0 2.66667V21.3333C0 22.8 1.4 24 3.11111 24H24.8889C26.6 24 28 22.8 28 21.3333V9.10667C28 8.4 27.6733 7.72 27.0822 7.22667L19.5689 0.786667C18.9933 0.28 18.2 0 17.3756 0ZM6.22222 16H21.7778V18.6667H6.22222V16ZM6.22222 10.6667H21.7778V13.3333H6.22222V10.6667ZM6.22222 5.33333H17.1111V8H6.22222V5.33333Z",
      isSelected: false,
    },
    {
      label: "PAYMENT",
      link: "./payment",
      icon: "M25.2 0H2.8C1.246 0 0.014 1.335 0.014 3L0 21C0 22.665 1.246 24 2.8 24H25.2C26.754 24 28 22.665 28 21V3C28 1.335 26.754 0 25.2 0ZM25.2 21H2.8V12H25.2V21ZM25.2 6H2.8V3H25.2V6Z",
      isSelected: false,
    },
    {
      label: "ORDERS",
      link: "orders",
      icon: "M0 0V24H28V0H0ZM12.4444 21.3333H3.11111V13.3333H12.4444V21.3333ZM12.4444 10.6667H3.11111V2.66667H12.4444V10.6667ZM24.8889 21.3333H15.5556V13.3333H24.8889V21.3333ZM24.8889 10.6667H15.5556V2.66667H24.8889V10.6667Z",
      isSelected: false,
    },
  ]);

  const [tableList, setTableList] = useState([
    {
      id: "A1",
      order: [],
      state: false,
      total: 0,
    },
    {
      id: "A2",
      order: [],
      state: false,
      total: 0,
    },
    {
      id: "A3",
      order: [],
      state: false,
      total: 0,
    },
    {
      id: "A4",

      order: [],
      state: false,
      total: 0,
    },
    {
      id: "A5",

      order: [],
      state: false,
      total: 0,
    },
    {
      id: "A6",
      order: [],
      state: false,
      total: 0,
    },
  ]);

  const [currentTable, setCurrentTable] = useState(null);

  const [menu, setMenu] = useState([]);

  const [path, setPath] = useState("");

  const handleStateTable = (newState) => {
    setTableList(newState);
  };

  const handleSelectedMenu = (target) => {
    let labelChange = target.value;
    let tempArr = listPage;
    tempArr.map((page) => {
      if (page.label === labelChange) {
        page.isSelected = true;
      } else page.isSelected = false;
      return page;
    });
    setListPage(tempArr);
  };

  const handleCurrentTable = (currentTable) => {
    if (!tableList[currentTable].state) {
      setPath("menu");
      handleSelectedMenu({ value: "MENU" });
    }
    setCurrentTable(currentTable);
    console.log(currentTable);
  };

  const handlePlaceOrder = () => {
    setPath("payment");
    handleSelectedMenu({ value: "PAYMENT" });
  };

  const handlePath = (newPath) => {
    setPath(newPath.toLowerCase());
    console.log(path);
  };

  const handleOrder = (idFood) => {
    let tempTable = [...tableList];
    let temp = tableList[currentTable];
    temp.order[idFood].quality += 1;

    let changedTable = tempTable.find((table, index) => index === currentTable);
    let total = 0;
    temp.order.forEach((food) => {
      total += food.price * food.quality;
    });
    changedTable.order = temp.order;
    tempTable[currentTable].total = total;
    setTableList(tempTable);
  };

  const handleClearItem = (idFood) => {
    let tempTable = [...tableList];
    let temp = tempTable[currentTable];
    temp.total -= temp.order[idFood].quality * temp.order[idFood].price;
    temp.order[idFood].quality = 0;
    setTableList(tempTable);
  };

  useEffect(() => {
    axios
      .get("https://6521b1fca4199548356d7dbf.mockapi.io/menu")
      .then((response) => {
        let temp = [...response.data];
        const newRes = () => {
          let tempArr = [];
          temp.forEach((f) => tempArr.push({ ...f }));
          return [...tempArr];
        };

        console.log(temp);
        temp.map((food) => {
          food.quality = 0;
          return food;
        });

        setMenu(response.data);

        setTableList((prev) => {
          prev.map((table) => {
            table.order = newRes();
            return table;
          });
          // console.log(prev);
          return prev;
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const submitOrder = () => {
    let tempTable = [...tableList];
    let temp = tempTable[currentTable];
    temp.state = true;

    setTableList(tempTable);
    setPath("home");
  };

  const finishOrder = () => {
    let tempTable = [...tableList];
    let temp = tempTable[currentTable];
    temp.state = false;
    temp.order.map((food, index) => handleClearItem(index));
    setTableList(tempTable);
    setPath("home");
  };
  return (
    <div className="App">
      <PathContext.Provider value={path}>
        <CurrentTableContext.Provider value={currentTable}>
          <MenuBtnContext.Provider value={listPage}>
            <TableContext.Provider value={tableList}>
              <TopSection />
              <Grid
                height={"90vh"}
                container
                spacing={2}
                columnGap={0}
                justifyContent="space-between"
                justifyItems="center">
                <Grid item md={1} sm={1}>
                  <Left
                    handleSelectedMenu={handleSelectedMenu}
                    path={path}
                    handlePath={handlePath}></Left>
                </Grid>
                <Grid item md={8} sm={6}>
                  <CenterSide
                    path={path}
                    menu={menu}
                    tableList={tableList}
                    handleStateTable={handleStateTable}
                    currentTable={currentTable}
                    handleOrder={handleOrder}
                    handleCurrentTable={handleCurrentTable}
                    handleClearItem={handleClearItem}></CenterSide>
                </Grid>
                <Grid item md={3} sm={5}>
                  <RightSide
                    path={path}
                    menu={menu}
                    tableList={tableList}
                    currentTable={currentTable}
                    handleClearItem={handleClearItem}
                    handlePlaceOrder={handlePlaceOrder}
                    submitOrder={submitOrder}
                    finishOrder={finishOrder}></RightSide>
                </Grid>
              </Grid>
            </TableContext.Provider>
          </MenuBtnContext.Provider>
        </CurrentTableContext.Provider>
      </PathContext.Provider>
    </div>
  );
}

export default App;
