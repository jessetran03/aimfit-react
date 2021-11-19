import React from 'react';
// import { Link, NavLink, useParams } from "react-router-dom";
import { WorkoutsQuery } from '../apollo';
import { useQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  classNames?: string;
}

interface Workout {
  id: string;
  title: string;
  day: string;
}

const Sidebar = ({ classNames }: SidebarProps) => {
  const { data } = useQuery(WorkoutsQuery);
  return (
    <div className={`${classNames} border-r`}>
      <div className="flex flex-col mx-5 mt-3">
        <NavLink
          to="/workouts"
          className={(isActive) =>
            !isActive ? 'bg-red-200 py-1 px-3' : 'py-1 px-3 font-semibold'
          }
        >
          Workouts
        </NavLink>
        {data?.workouts?.map((workout: Workout) => (
          <NavLink
            className="py-1 px-3 ml-5 font-semibold"
            key={workout.id}
            to={`/workouts/${workout.id}`}
          >
            {workout.title}
          </NavLink>
        ))}
        <NavLink
          to="/exercises"
          className={(isActive) =>
            !isActive ? 'bg-red-200 py-1 px-3' : 'py-1 px-3 font-semibold'
          }
        >
          Exercises
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
