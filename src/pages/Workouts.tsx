import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon, OptionsIcon } from '../utils/icons';
import { useQuery } from '@apollo/client';
import { WorkoutsQuery } from '../apollo';
import Modal from '../components/Modal';
import NewWorkoutForm from '../components/forms/NewWorkoutForm';
import useModal from '../hooks/useModal';
import Loading from '../components/Loading';

interface Workout {
  id: number;
  title: string;
  day: string;
}

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const Workouts = () => {
  const [title, setTitle] = useState<string>('');
  const [day, setDay] = useState<string>('Sunday');
  const { isOpen, setOpen, setClosed } = useModal();
  const { loading, error, data } = useQuery(WorkoutsQuery);
  const workouts = data
    ? [...data.workouts].sort((a: Workout, b: Workout) =>
        weekdays.indexOf(a.day) > weekdays.indexOf(b.day) ? 1 : -1,
      )
    : [];
  const [workoutId, setWorkoutId] = useState<number | null>(null);
  const handleClose = () => {
    setClosed();
    setWorkoutId(null);
    setTitle('');
    setDay('Sunday');
  };
  if (loading) return <Loading />;
  if (error) return <div>Error!</div>;
  return (
    <>
      <div className="font-semibold">
        <Link to="/workouts">Workouts</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {workouts.map((workout: Workout) => (
          <Link
            to={`${workout.id}`}
            key={workout.id}
            className="h-32 rounded-lg border-2 p-5 text-2xl flex flex-row justify-between items-center m-3"
          >
            <div className="flex flex-col">
              <h2>{workout.title}</h2>
              <h3 className="text-base">{workout.day}</h3>
            </div>
            <div className="flex flex-col">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpen();
                  setWorkoutId(workout.id);
                  setDay(workout.day);
                  setTitle(workout.title);
                }}
              >
                <OptionsIcon />
              </button>
            </div>
          </Link>
        ))}
        <button
          className="h-32 border-2 p-5 text-sm font-bold flex justify-center items-center m-3"
          onClick={(e) => {
            e.preventDefault();
            setOpen();
          }}
        >
          <div className="border p-2 border border-gray-500 rounded-xl">
            CREATE NEW <PlusIcon className="text-green-500" />
          </div>
        </button>
        <Modal isOpen={isOpen} setClosed={handleClose}>
          <NewWorkoutForm
            day={day}
            title={title}
            setClosed={handleClose}
            setDay={setDay}
            setTitle={setTitle}
            workoutId={workoutId}
          />
        </Modal>
      </div>
    </>
  );
};

export default Workouts;
