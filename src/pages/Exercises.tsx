import { useState } from "react";
import { Link } from "react-router-dom";
import { PlusIcon } from "../utilities/icons";
import DATA from "../STORE";

const Exercises = () => {
  const [exercises, setExercises] = useState(DATA.exercises);
  return (
    <div className="flex flex-wrap">
      {exercises.map((exercise) => (
        <Link
          to={`/exercises/${exercise.id}`}
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
  );
};

export default Exercises;
