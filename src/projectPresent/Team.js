import React from "react";
import Navbar from "./Navbar";
import "./Style.css";
const Team = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <h1>Team</h1>
      </div>
    </>
  );
};

export default Team;
