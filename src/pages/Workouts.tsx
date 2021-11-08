import { Link } from 'react-router-dom';
import { PlusIcon } from '../utils/icons';
import { useQuery } from '@apollo/client';
import { WorkoutsQuery } from '../apollo';

interface Workout {
  id: number;
  title: string;
  day: string;
}

const Workouts = () => {
  const { loading, error, data } = useQuery(WorkoutsQuery);
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error!</div>;
  return (
    <>
      <div>Workout List Page</div>
      <div className="flex flex-wrap">
        {data.workouts.map((workout: Workout) => (
          <Link
            to={`${workout.id}`}
            key={workout.id}
            className="w-52 h-24 border-2 p-5 text-2xl flex justify-center items-center m-3"
          >
            {workout.title}
          </Link>
        ))}
        <a
          href="#"
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
