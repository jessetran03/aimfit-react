import { FormEvent, Dispatch, SetStateAction } from 'react';
import Input from '../Input';
import Button from '../Button';
import Select from '../Select';
import {
  WorkoutsQuery,
  CreateWorkoutMutation,
  DeleteWorkoutMutation,
  UpdateWorkoutMutation,
} from '../../apollo';
import { useMutation } from '@apollo/client';

interface INewWorkoutFormProps {
  day: string;
  title: string;
  workoutId?: number | null;
  setClosed: () => void;
  setDay: Dispatch<SetStateAction<string>>;
  setTitle: Dispatch<SetStateAction<string>>;
}

const NewWorkoutForm = ({
  day,
  title,
  workoutId,
  setClosed,
  setDay,
  setTitle,
}: INewWorkoutFormProps) => {
  const [createWorkout] = useMutation(CreateWorkoutMutation, {
    variables: { title, day },
    refetchQueries: [WorkoutsQuery],
    onCompleted: setClosed,
  });
  const [editWorkout] = useMutation(UpdateWorkoutMutation, {
    variables: { id: workoutId, title, day },
    refetchQueries: [WorkoutsQuery],
    onCompleted: setClosed,
  });
  const [deleteWorkout] = useMutation(DeleteWorkoutMutation, {
    variables: { id: workoutId },
    refetchQueries: [WorkoutsQuery],
    onCompleted: setClosed,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    workoutId ? editWorkout() : createWorkout();
  };

  return (
    <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
      <h2 className="text-lg mb-2 text-center">Add Workout</h2>
      <Input
        autoFocus
        placeholder="Workout Name"
        required
        value={title}
        onChange={(e) => setTitle((e.target as HTMLInputElement).value)}
      />
      <Select
        className="mt-2"
        value={day}
        onChange={(e) => setDay((e.target as HTMLSelectElement).value)}
      >
        <>
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </>
      </Select>
      <div className="flex flex-row justify-between mt-3 space-x-3">
        {workoutId && (
          <Button
            className="bg-red-500 w-full"
            type="button"
            onClick={() => deleteWorkout()}
          >
            Delete
          </Button>
        )}

        <Button primary className="w-full" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default NewWorkoutForm;
