import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

// Home, start - learning, tutorials, about - us;

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        // Sign-out successful.
        // console.log(user);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const links = (
    <div className="flex gap-3">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/startlearning">Start Learning</NavLink>
      </li>
      <li>
        <NavLink to="/tutorials">Tutorials</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </div>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-2xl font-bold">WordTrail</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-2">
        <div className=" ">
          {user && user?.photoURL ? (
            <div>
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={user?.photoURL}
                alt=""
              />
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn btn-neutral rounded-none"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn btn-neutral rounded-none">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
