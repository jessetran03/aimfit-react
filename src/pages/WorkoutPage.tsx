import { useState } from "react";
import { Link } from "react-router-dom";
import { PlusIcon } from "../utilities/icons"
import DATA from "../STORE";

const WorkoutPage = () => {
  const [exercises, setExercises] = useState(DATA.pushWorkoutExercises);
  return (
    <>
    <div>Individual Workout Page</div>
    <div className="flex flex-wrap">
      {exercises.map((exercise) => (
        <Link
          to={`/workouts/1/${exercise.id}`}
          key={exercise.id}
          className="w-52 h-24 border-2 p-5 text-2xl flex justify-center items-center m-3"
        >
          {exercise.name}
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

export default WorkoutPage;
