// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
// import "./style.css";

// function MenuIcon({ listPageProps, onClick }) {
//   const [listPage, setListPage] = useState(listPageProps);
//   const [isActive, setIsActive] = useState([true, false, false, false]);

//   const handleClick = async (index) => {
//     await onClick(index);
//     console.log("done 1 ");
//     await setListPage(listPageProps);
//     console.log("done 2 ");
//     setIsActive(() => {
//       // let tempArr;
//       // listPage.
//     });
//   };

//   return (
// //     <>
// //               <svg
// //           style={{
// //             marginBottom: "10px",
// //           }}
// //           xmlns="http://www.w3.org/2000/svg"
// //           width="28"
// //           height="24"
// //           viewBox="0 0 28 24"
// //           fill="none">
// //           <path
// //             d={listPage[1].icon}
// //             fill={listPage[1].isSelected ? "#2E636E" : "#D8DBD9"}
// //           />
// //         </svg>
// //       <button
// //         key={1}
// //         onClick={() => handleClick(1)}
// //         className="menu_btn"
// //         id={isActive[1] ? "active" : "null"}>

// // {        listPage[1].label}
// //       </button>
// //     </>
//  );
// }

// export default MenuIcon;
