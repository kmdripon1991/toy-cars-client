import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 justify-between">
      <Link className="flex items-center">
        <img src="https://i.ibb.co/ccjKtJv/logo.png" className="w-20 h-20" />
        <h2 className="font-extrabold text-2xl text-purple-600 tracking-widest">
          ToyCars
        </h2>
      </Link>
      <div className="flex">
        <ul className="flex lg:flex-row lg:space-x-8 items-center font-medium">
          <li>
            <NavLink className="btn-navbar" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="btn-navbar">All Toys</NavLink>
          </li>
          <li>
            <NavLink className="btn-navbar">My Toys</NavLink>
          </li>
          <li>
            <NavLink className="btn-navbar">Add Link Toy</NavLink>
          </li>
          <li>
            <NavLink className="btn-navbar">Blogs</NavLink>
          </li>
        </ul>
      </div>
      {/* <Link className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </Link> */}
      <Link to="/login">
        <button className="btn btn-outline btn-info min-w-[120px] text-xl font-bold">
          Login
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
