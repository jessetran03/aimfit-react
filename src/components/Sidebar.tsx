import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="border-r">
      <div className="flex flex-col items-center space-y-0.5 mt-3">
        <Link to="/workouts">Workouts</Link>
        <Link to="/exercises">Exercises</Link>
      </div>
    </div>
  );
};

export default Sidebar;
