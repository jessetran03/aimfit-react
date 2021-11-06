import { useState } from "react";
import { Link } from "react-router-dom";
import { PlusIcon } from "../utilities/icons";
import { useQuery } from "@apollo/client";
import { workoutsQuery } from "../apollo/client";
import DATA from "../STORE";

const Workouts = () => {
  const [workouts, setWorkouts] = useState(DATA.workouts);
  const { data } = useQuery(workoutsQuery);
  console.log({ workouts: data });
  return (
    <>
      <div>Workout List Page</div>
      <div className="flex flex-wrap">
        {workouts.map((workout) => (
          <Link
            to={`${workout.id}`}
            key={workout.id}
            className="w-52 h-24 border-2 p-5 text-2xl flex justify-center items-center m-3"
          >
            {workout.name}
          </Link>
        ))}
        <a
          href="3"
          className="w-52 h-24 border-2 p-5 text-sm font-bold flex justify-center items-center m-3"
        >
          <div className="border p-2 border border-gray-500 rounded-xl">
            CREATE NEW <PlusIcon className="text-gray-500" />
          </div>
        </a>
      </div>
    </>
  );
};

export default Workouts;
