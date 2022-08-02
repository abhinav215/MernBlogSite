
import React from "react";
// import "./Abc.css";

const Abc = () => {
  return (
    <div className="about">
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div className="box">
        <div className="square" style={{ "--i": 0 }}></div>
        <div className="square" style={{ "--i": 1 }}></div>
        <div className="square" style={{ "--i": 2 }}></div>
        <div className="square" style={{ "--i": 3 }}></div>
        <div className="square" style={{ "--i": 4 }}></div>
        <div className="container">
          <div className="information">
            <h2>Error</h2>
            <p>
              This link is not authorized. Plaese check ur link.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abc;
