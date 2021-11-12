import React from 'react';
import { Link } from 'react-router-dom';
import { SettingsIcon, BarsIcon } from '../utils/icons';

const Nav = () => {
  const auth = true;
  if (auth) {
    return (
      <nav className="flex items-center justify-end bg-gray-100">
        <div className="hidden space-x-5 px-8 sm:flex">
          <Link to="/workouts">Workouts</Link>
          <Link to="/exercises">Exercises</Link>
          <a href="#">
            <SettingsIcon className="text-2xl text-gray-500" />
          </a>
          <a href="#">Sign Out</a>
        </div>
        {/* Mobile */}
        <Link to="/workouts" className="flex sm:hidden px-8">
          <BarsIcon className="text-3xl" />
        </Link>
      </nav>
    );
  }
  return (
    <nav className={`flex items-center justify-end`}>
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
