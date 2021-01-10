import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>
          <Link to={"/"} className="text-light">
            {" "}
            Crud - react, redux , rest api & Axios
          </Link>
        </h1>
      </div>
      <Link
        className="btn btn-danger nuevo-post d-block d-md-inline-block"
        to={"/productos/nuevo"}
      >
        Agregar Producto +
      </Link>
    </div>
  );
};

export default Header;
