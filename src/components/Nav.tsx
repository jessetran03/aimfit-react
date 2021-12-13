import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarsIcon } from '../utils/icons';

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-end">
        <div className="hidden space-x-5 px-8 sm:flex">
          <Link to="/workouts">Workouts</Link>
          <Link to="/exercises">Exercises</Link>
          <div className="border"></div>
          <a href="/" onClick={() => localStorage.clear()}>
            Sign Out
          </a>
        </div>
        {/* Mobile */}
        <div className="flex flex-col sm:hidden px-0">
          <button
            className="flex sm:hidden py-3 px-4"
            onClick={() => setOpen(!open)}
          >
            <BarsIcon className="text-3xl" />
          </button>
        </div>
      </nav>
      {open && (
        <div
          className="fixed flex flex-col top-16 w-screen text-lg font-semibold"
          onClick={() => setOpen(false)}
        >
          <Link
            className="bg-gray-100 w-full text-center p-4 border"
            to="/workouts"
          >
            Workouts
          </Link>
          <Link
            className="bg-gray-100 w-full text-center p-4 border"
            to="/exercises"
          >
            Exercises
          </Link>
          <a
            className="bg-gray-100 w-full text-center p-4 border"
            href="/"
            onClick={() => localStorage.clear()}
          >
            Sign Out
          </a>
        </div>
      )}
    </>
  );
};

export default Nav;
