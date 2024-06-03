import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const conditionalItems = (
    <>
      <li>
        <Link>My Toys</Link>
      </li>
      <li>
        <Link to='/add-toy'>Add Toys</Link>
      </li>
    </>
  );

  return (
    // <div className="navbar bg-base-300 justify-between">
    //   <Link className="flex items-center">
    //     <img src="https://i.ibb.co/ccjKtJv/logo.png" className="w-20 h-20" />
    //     <h2 className="font-extrabold text-2xl text-purple-600 tracking-widest">
    //       ToyCars
    //     </h2>
    //   </Link>
    //   <div className="lg:hidden flex items-start">
    //     <button onClick={toggleMenu} className="text-3xl focus:outline-none">
    //       &#9776;
    //     </button>
    //   </div>
    //   {/* <ul className="lg:flex lg:space-x-8 items-center font-medium hidden"> */}
    //   <ul
    //     className={`lg:flex lg:space-x-8 items-center font-medium ${
    //       isOpen ? "block" : "hidden"
    //     } lg:block`}
    //   >
    //     <li>
    //       <NavLink className="btn-navbar" to="/">
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink className="btn-navbar">All Toys</NavLink>
    //     </li>
    //     <li>
    //       <NavLink className="btn-navbar">My Toys</NavLink>
    //     </li>
    //     <li>
    //       <NavLink className="btn-navbar">Add Link Toy</NavLink>
    //     </li>
    //     <li>
    //       <NavLink className="btn-navbar">Blogs</NavLink>
    //     </li>
    //   </ul>
    //   {user ? (
    //     <Link className="btn btn-ghost btn-circle avatar">
    //       <div className="w-10 rounded-full">
    //         <img
    //           alt="Tailwind CSS Navbar component"
    //           src={user.photoURL}
    //           title={user.displayName}
    //         />
    //       </div>
    //     </Link>
    //   ) : (
    //     <Link to="/login">
    //       <button className="btn btn-outline btn-info min-w-[120px] text-xl font-bold">
    //         Login
    //       </button>
    //     </Link>
    //   )}
    // </div>
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMenu className="h-5 w-5" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium space-y-1"
          >
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>All Toys</Link>
            </li>
            {user && conditionalItems}
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <Link className="flex items-center">
          <img src="https://i.ibb.co/ccjKtJv/logo.png" className="w-20 h-20" />
          <h2 className="font-extrabold text-2xl text-purple-600 tracking-widest">
            ToyCars
          </h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 font-medium space-x-7">
          <li>
            <NavLink className="btn-navbar">Home</NavLink>
          </li>
          <li>
            <NavLink className="btn-navbar">All Toys</NavLink>
          </li>
          {user && conditionalItems}
          <li>
            <NavLink to='/blog' className="btn-navbar">Blog</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user.photoURL}
                title={user.displayName}
              />
            </div>
          </Link>
        ) : (
          <Link to="/login">
            <button className="btn btn-outline btn-info min-w-[100px] text-xl font-bold">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
