import React from "react";
import { Link } from "react-router-dom";
import { SettingsIcon } from "../utilities/icons";

const Nav = ({ className }: any) => {
  const auth = true;
  if (auth) {
    return (
      <nav className={`${className} flex items-center justify-end bg-gray-100`}>
        <div className="space-x-5 px-8 flex">
          <Link to="/workouts">Workouts</Link>
          <Link to="/exercises">Exercises</Link>
          <a href="#"><SettingsIcon className="text-2xl text-gray-500" /></a>
          <a href="#">Sign Out</a>
        </div>
      </nav>
    );
  }
  return (
    <nav className={`${className} flex items-center justify-end`}>
      <div className="space-x-5 px-5">
        <Link to="/register">Sign Up</Link>
        <Link to="/login">Login</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/exercises">Exercises</Link>
      </div>
    </nav>
  );
};

export default Nav;
