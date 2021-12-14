import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PlusIcon, RightIcon } from '../utils/icons';
import { useQuery, useMutation } from '@apollo/client';
import { WorkoutExercisesQuery, AddWorkoutExerciseMutation } from '../apollo';
import Loading from '../components/Loading';
import Modal from '../components/Modal';
import AddWorkoutExerciseForm from '../components/forms/AddWorkoutExerciseForm';
import useModal from '../hooks/useModal';

interface WorkoutExercise {
  id: number;
  workout: Workout;
  exercise: Exercise;
}

interface Workout {
  id: string;
  day: string;
  title: string;
}

interface Exercise {
  id: string;
  name: string;
  muscle: string;
}

// CLEAN UP FILTER/TYPES

const WorkoutPage = () => {
  const [exerciseId, setExerciseId] = useState<string>('1');
  const { isOpen, setOpen, setClosed } = useModal();
  const { workoutId } = useParams();
  const { loading, error, data } = useQuery(WorkoutExercisesQuery, {
    variables: { id: workoutId },
  });
  const [addWorkoutExercise] = useMutation(AddWorkoutExerciseMutation, {
    variables: { workoutId, exerciseId },
    refetchQueries: [WorkoutExercisesQuery],
    onCompleted: setClosed,
  });
  const workoutExercises = data?.workoutExercises.filter(
    (workoutExercise: WorkoutExercise) =>
      workoutExercise.workout.id === workoutId,
  );
  if (loading) return <Loading />;
  if (error) return <div>Error!</div>;
  return (
    <>
      <div className="font-semibold">
        <Link to="/workouts">Workouts </Link>
        <RightIcon /> {data?.workout.title}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {workoutExercises.map((workoutExercise: WorkoutExercise) => (
          <Link
            to={`/exercises/${workoutExercise.exercise.id}`}
            key={workoutExercise.id}
            className="h-24 border-2 p-5 text-2xl flex justify-center items-center m-3"
          >
            {workoutExercise.exercise.name}
          </Link>
        ))}
        <button
          className="w-52 h-24 border-2 p-5 text-sm font-bold flex justify-center items-center m-3"
          onClick={() => setOpen()}
        >
          <div className="border p-2 border border-gray-500 rounded-xl">
            ADD EXERCISE <PlusIcon className="text-gray-500" />
          </div>
        </button>
        <Modal isOpen={isOpen} setClosed={setClosed}>
          <AddWorkoutExerciseForm
            onSubmit={() => addWorkoutExercise()}
            setExerciseId={setExerciseId}
          />
        </Modal>
      </div>
    </>
  );
};

export default WorkoutPage;
