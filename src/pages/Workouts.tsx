import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon } from '../utils/icons';
import { useQuery, useMutation } from '@apollo/client';
import {
  WorkoutsQuery,
  CreateWorkoutMutation,
  DeleteWorkoutMutation,
} from '../apollo';
import Modal from '../components/Modal';
import NewWorkoutForm from '../components/NewWorkoutForm';
import useModal from '../hooks/useModal';

interface Workout {
  id: number;
  title: string;
  day: string;
}

const Workouts = () => {
  const { loading, error, data } = useQuery(WorkoutsQuery);
  const [title, setTitle] = useState<string>();
  const [day, setDay] = useState<string>('Sunday');
  const { isOpen, setOpen, setClosed } = useModal();

  const [createWorkout] = useMutation(CreateWorkoutMutation, {
    variables: {
      input: { day, title },
    },
    refetchQueries: [WorkoutsQuery],
    onCompleted: setClosed,
  });

  const [deleteWorkout] = useMutation(DeleteWorkoutMutation, {
    refetchQueries: [WorkoutsQuery],
  });

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error!</div>;
  return (
    <>
      <div className="font-semibold">
        <Link to="/workouts">Workouts</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.workouts.map((workout: Workout) => (
          <Link
            to={`${workout.id}`}
            key={workout.id}
            className="h-32 rounded-lg border-2 p-5 text-2xl flex flex-col justify-center items-center m-3"
          >
            <h2>{workout.title}</h2>
            <h3 className="text-base">{workout.day}</h3>
            <button
              className="text-sm text-white border mt-2 rounded-xl p-1 bg-gray-400"
              onClick={(e) => {
                e.preventDefault();
                deleteWorkout({ variables: { id: workout.id } });
              }}
            >
              Delete
            </button>
          </Link>
        ))}
        <button
          className="h-32 border-2 p-5 text-sm font-bold flex justify-center items-center m-3"
          onClick={(e) => {
            e.preventDefault();
            setOpen();
            setDay('Sunday');
          }}
        >
          <div className="border p-2 border border-gray-500 rounded-xl">
            CREATE NEW <PlusIcon className="text-gray-500" />
          </div>
        </button>
        <Modal isOpen={isOpen} setClosed={setClosed}>
          <NewWorkoutForm
            onSubmit={() => createWorkout()}
            setTitle={setTitle}
            setDay={setDay}
            day={day}
          />
        </Modal>
      </div>
    </>
  );
};

export default Workouts;
