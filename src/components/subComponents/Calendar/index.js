import React, { useEffect, useState } from "react";
import calender_icon from "./assets/calender-icon.svg";

function Calendar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toLocaleDateString());

  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());
    setDate(new Date().toLocaleDateString());
  };

  useEffect(() => {
    setInterval(() => {
      updateTime();
    }, 1000);
  }, []);

  return (
    <div className="time-container">
      <img
        height="25"
        margin="10"
        style={{
          transform: "translate(-10px,5px)",
        }}
        src={calender_icon}
        alt=""
      />
      <span
        style={{
          fontSize: 20,
        }}
        className="time">
        {date + "   "} | {time}
      </span>
    </div>
  );
}

export default Calendar;
