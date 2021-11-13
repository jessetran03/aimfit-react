import { Link } from 'react-router-dom';
import { PlusIcon, RightIcon } from '../utils/icons';
import { useQuery } from '@apollo/client';
import { WorkoutExercisesQuery } from '../apollo';

interface WorkoutExercise {
  id: number;
  workout_id: number;
  exercise: Exercise;
}

interface Exercise {
  id: number;
  name: string;
  muscle: string;
}

const WorkoutPage = () => {
  // const [exercises] = useState(DATA.pushWorkoutExercises);
  const { loading, error, data } = useQuery(WorkoutExercisesQuery);
  console.log(data);
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error!</div>;
  console.log(data);
  return (
    <>
      <div className="font-semibold">
        <Link to="/workouts">Workouts </Link>
        <RightIcon /> Push Workout
      </div>
      <div className="flex flex-wrap">
        {data.workoutExercises.map((workoutExercise: WorkoutExercise) => (
          <Link
            to={`/exercises/${workoutExercise.exercise.id}`}
            key={workoutExercise.exercise.id}
            className="w-52 h-24 border-2 p-5 text-2xl flex justify-center items-center m-3"
          >
            {workoutExercise.exercise.name}
          </Link>
        ))}
        <a
          href="#"
          className="w-52 h-24 border-2 p-5 text-sm font-bold flex justify-center items-center m-3"
        >
          <div className="border p-2 border border-gray-500 rounded-xl">
            ADD EXERCISE <PlusIcon className="text-gray-500" />
          </div>
        </a>
      </div>
    </>
  );
};

export default WorkoutPage;
