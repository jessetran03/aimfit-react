import { Link } from 'react-router-dom';
import { PlusIcon } from '../utils/icons';
import { useQuery } from '@apollo/client';
import { ExercisesQuery } from '../apollo';

interface Exercise {
  id: number;
  name: string;
  muscle: string;
}

const Exercises = () => {
  const { loading, error, data } = useQuery(ExercisesQuery);
  const exercises = data?.exercises
    .slice()
    .sort((a: Exercise, b: Exercise) => (a.name > b.name ? 1 : -1));
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error!</div>;
  return (
    <>
      <div className="font-semibold">
        <Link to="/exercises">Exercises</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {exercises.map((exercise: Exercise) => (
          <Link
            to={`/exercises/${exercise.id}`}
            key={exercise.id}
            className="h-28 border-2 px-5 text-lg flex justify-center items-center m-3"
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
