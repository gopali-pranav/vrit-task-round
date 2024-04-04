import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="p-4">
      <div className="header-container flex justify-between items-center">
        <div className="logo">
          <img src="/pacafichunt.png" alt="" className="h-10 ml-16" />
        </div>
        <div className="headercontent space-x-5 mr-20  ">
          <Link to={"/home"} className="text-headertext">
            Home{" "}
          </Link>
          <Link to={"/job"} className="text-headertext">
            Jobs{" "}
          </Link>
          <Link className="text-headertext">Companies</Link>
          <Link className="text-headertext">About us</Link>
          <button className="text-primary border border-primary p-2 w-24 rounded-md">
            Sign Up
          </button>
          <button className="bg-primary text-white p-2 rounded-md w-28">
            Post a Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
