import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            348 Project
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          

          <Link className="btn btn-outline-dark" to="/viewcustomers">
            View Customers
          </Link>
          <Link className="btn btn-outline-dark" to="/adduser">
            Add Customer
          </Link>
          <Link className="btn btn-outline-dark" to="/addproduct">
            Add Product
          </Link>
        </div>
      </nav>
    </div>
  );
}