import { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { PlusIcon, RightIcon } from '../utils/icons';
import { useParams } from 'react-router-dom';
import { PlusIcon, LeftArrowIcon } from '../utils/icons';
import { useQuery, useMutation } from '@apollo/client';
import { ExerciseLogQuery, AddLogEntryMutation } from '../apollo';
import Modal from '../components/Modal';
import useModal from '../hooks/useModal';
import LogEntryForm from '../components/LogEntryForm';
import ExerciseLogTable from '../components/ExerciseLogTable';

const ExerciseLog = () => {
  const { exerciseId } = useParams();
  const { loading, error, data } = useQuery(ExerciseLogQuery, {
    variables: {
      exerciseId,
    },
  });
  const [setCount, setSetCount] = useState<number>();
  const [repCount, setRepCount] = useState<number>();
  const [weightCount, setWeightCount] = useState<number>();
  const { isOpen, setOpen, setClosed } = useModal();

  const [addLogEntry] = useMutation(AddLogEntryMutation, {
    variables: {
      input: { exerciseId, setCount, repCount, weightCount },
    },
    refetchQueries: [ExerciseLogQuery],
    onCompleted: setClosed,
  });

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error!</div>;
  if (!data) return null;
  return (
    <>
      <div className="font-semibold mb-2">
        {/* <Link to="/workouts">Workouts </Link>
        <RightIcon />
        <Link to="/workouts/1"> Push Workout </Link>
        <RightIcon />
        <Link to={`/exercises/${exerciseId}`}> {data.exercise.name} </Link> */}
        <button className="font-semibold" onClick={() => window.history.back()}>
          <LeftArrowIcon /> Go Back
        </button>
      </div>
      <div>
        <ExerciseLogTable
          exerciseName={data.exercise.name}
          data={data.exerciseLog}
        />
      </div>
      <div className="flex flex-wrap">
        <button
          className="w-52 h-24 border-2 p-5 text-sm font-bold flex justify-center items-center m-3"
          onClick={() => setOpen()}
        >
          <div className="border p-2 border border-gray-500 rounded-xl">
            ADD ENTRY <PlusIcon className="text-gray-500" />
          </div>
        </button>
        <Modal isOpen={isOpen} setClosed={setClosed}>
          <LogEntryForm
            onSubmit={() => addLogEntry()}
            setSetCount={setSetCount}
            setRepCount={setRepCount}
            setWeightCount={setWeightCount}
          />
        </Modal>
      </div>
    </>
  );
};

export default ExerciseLog;
