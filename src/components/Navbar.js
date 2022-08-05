import React from "react";

export const Navbar = ({brand}) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <h1 className="navbar-brand text-uppercase">{brand}</h1>
      </div>
    </nav>
  );
};
