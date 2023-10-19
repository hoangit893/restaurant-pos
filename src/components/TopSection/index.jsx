import React from "react";
import Logo from "../subComponents/Logo";
import SearchBar from "../subComponents/SearchBar";
// import Grid from "@mui/material/Grid";
import Calendar from "../subComponents/Calendar";
import Button from "../subComponents/Button";
import pos_add from "../../assets/pos-add.svg";

const TopSection = () => {
  return (
    <div
      style={{
        height: "10vh",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "nowrap",
        padding: "0px 30px",
        marginTop: "5px",
        borderBottom: "solid 3px #ECEDED",
      }}
      className="top-section">
      {/* <Grid
        container
        space={2}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center">
        <Grid>
          <Logo></Logo>
        </Grid>
        <Grid>
          <SearchBar></SearchBar>
        </Grid>
        <Grid>
          <Calendar></Calendar>
        </Grid>
        <Grid>
          <Button
            b_height="3.625rem"
            b_width="10.9375rem"
            label="ADD BUTTON"
            b_color="#B1CED4"
            img={pos_add}></Button>
        </Grid>
      </Grid> */}
      <div
        style={{
          position: "relative",
          width: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="left-top-section">
        <Logo></Logo>
        <SearchBar></SearchBar>
      </div>

      <div
        style={{
          position: "relative",
          width: "50vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="right-top-section">
        <Calendar></Calendar>
        <Button
          b_height="3.625rem"
          b_width="10.9375rem"
          label="ADD TABLE"
          b_color="#B1CED4"
          img={pos_add}></Button>
      </div>
    </div>
  );
};

export default TopSection;
