import { useState } from "react";
import DATA from "../STORE";

const Workouts = () => {
  const [workouts, setWorkouts] = useState(DATA.workouts);
  return (
    <div className="flex flex-wrap">
      {workouts.map((workout) => (
        <a
          href="#"
          className="w-52 h-24 border-2 p-5 text-2xl flex justify-center items-center m-3"
        >
          {workout.name}
        </a>
      ))}
      <a
        href="3"
        className="w-52 h-24 border-2 p-5 text-sm font-bold flex justify-center items-center m-3"
      >
        <div className="border p-2 border border-gray-500 rounded-xl">
          CREATE NEW +
        </div>
      </a>
    </div>
  );
};

export default Workouts;
