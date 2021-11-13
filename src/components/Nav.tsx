import React from 'react';
import { Link } from 'react-router-dom';
import { SettingsIcon, BarsIcon } from '../utils/icons';
import Modal from '../components/Modal';
import useModal from '../hooks/useModal';

const Nav = () => {
  const { isOpen, setOpen, setClosed } = useModal();
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
        <div className="flex sm:hidden px-0">
          <button className="flex sm:hidden py-3 px-4" onClick={() => setOpen()}>
            <BarsIcon className="text-3xl" />
          </button>
          <Modal isOpen={isOpen} setClosed={setClosed}>
            <div className="flex flex-col">
              <Link to="/workouts">Workouts</Link>
              <Link to="/exercises">Exercises</Link>
            </div>
          </Modal>
        </div>
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
