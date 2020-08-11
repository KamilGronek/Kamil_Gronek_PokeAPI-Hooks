import React from "react";
import spinner from "../img/spinner.gif";

const Spinner = () => {
  return (
    <div className="catalog__heading">
      <img
        src={spinner}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading"
      />
    </div>
  );
};

export default Spinner;
