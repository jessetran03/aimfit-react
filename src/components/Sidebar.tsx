import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="border-r">
      <div className="flex flex-col mx-5 mt-3">
        <NavLink
          to="/workouts"
          className={(isActive) =>
            !isActive ? "bg-red-200 py-1 px-3" : "py-1 px-3"
          }
        >
          Workouts
        </NavLink>
        <NavLink
          to="/exercises"
          className={(isActive) =>
            !isActive ? "bg-red-200 py-1 px-3" : "py-1 px-3"
          }
        >
          Exercises
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
