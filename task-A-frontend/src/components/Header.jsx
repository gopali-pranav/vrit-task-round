import { NavLink } from "react-router-dom";
import "../index.css";
const Header = () => {
  return (
    <div className="p-4">
      <div className="header-container flex justify-between items-center">
        <div className="logo">
          <img src="/pacafichunt.png" alt="" className="h-10 ml-16" />
        </div>
        <div className="headercontent space-x-5 mr-20  ">
          <NavLink to={"/home"} className="text-headertext nav navactive">
            Home
          </NavLink>
          <NavLink to={"/job"} className="text-headertext nav">
            Jobs
          </NavLink>
          <NavLink to={"/company"} className="text-headertext nav">
            Companies
          </NavLink>
          <NavLink to={"/about"} className="text-headertext nav">
            About us
          </NavLink>
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
