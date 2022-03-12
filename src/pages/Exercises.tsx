import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon } from '../utils/icons';
import { useQuery, useMutation } from '@apollo/client';
import { ExercisesQuery, CreateExerciseMutation } from '../apollo';
import Modal from '../components/Modal';
import useModal from '../hooks/useModal';
import NewExerciseForm from '../components/forms/NewExerciseForm';
import Loading from '../components/Loading';

interface Exercise {
  id: number;
  name: string;
  muscle: string;
}

const Exercises = () => {
  const { loading, error, data } = useQuery(ExercisesQuery);
  const [name, setName] = useState<string>();
  const [muscle, setMuscle] = useState<string>();
  const { isOpen, setOpen, setClosed } = useModal();

  const [createExercise] = useMutation(CreateExerciseMutation, {
    variables: { name, muscle },
    refetchQueries: [ExercisesQuery],
    onCompleted: setClosed,
  });

  const exercises =
    data?.exercises
      .slice()
      .sort((a: Exercise, b: Exercise) => (a.name > b.name ? 1 : -1)) || [];
  if (loading) return <Loading />;
  if (error) return <div>Error!</div>;
  return (
    <>
      <div className="font-semibold">
        <Link to="/exercises">Exercises</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exercises.map((exercise: Exercise) => (
          <Link
            to={`/exercises/${exercise.id}`}
            key={exercise.id}
            className="h-20 border-2 px-5 text-lg flex justify-center items-center m-3"
          >
            {exercise.name}
          </Link>
        ))}
        <button
          onClick={() => setOpen()}
          className="w-52 h-24 border-2 p-5 text-sm font-bold flex justify-center items-center m-3"
        >
          <div className="border p-2 border border-gray-500 rounded-xl">
            CREATE NEW <PlusIcon className="text-gray-500" />
          </div>
        </button>
        <Modal isOpen={isOpen} setClosed={setClosed}>
          <NewExerciseForm
            onSubmit={() => createExercise()}
            setName={setName}
            setMuscle={setMuscle}
          />
        </Modal>
      </div>
    </>
  );
};

export default Exercises;
