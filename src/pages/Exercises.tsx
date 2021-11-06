import { Link } from "react-router-dom";
import { PlusIcon } from "../utilities/icons";
import { useQuery } from "@apollo/client";
import { exercisesQuery } from "../apollo/client";

const Exercises = () => {
  const { loading, error, data } = useQuery(exercisesQuery);
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error!</div>;
  return (
    <>
      <div>Exercise List Page</div>
      <div className="flex flex-wrap">
        {data.exercises.map((exercise: any) => (
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
    </>
  );
};

export default Exercises;
