import { FormEvent } from 'react';
import Button from './Button';
import Select from './Select';
import { useQuery } from '@apollo/client';
import { ExercisesQuery } from '../apollo';

interface IAddWorkoutExerciseFormProps {
  onSubmit: () => void;
  setExerciseId: (exerciseId: string) => void;
}

interface Exercise {
  id: string;
  name: string;
  muscle: string;
}

const AddWorkoutExerciseForm = ({
  onSubmit,
  setExerciseId,
}: IAddWorkoutExerciseFormProps) => {
  const { data } = useQuery(ExercisesQuery);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };
  if (!data) return null;
  return (
    <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
      <h2 className="text-lg mb-2 text-center">Add Exercise to Workout</h2>
      <Select
        onChange={(e) => setExerciseId((e.target as HTMLSelectElement).value)}
      >
        {data.exercises.map((exercise: Exercise) => (
          <option key={exercise.id} value={exercise.id}>
            {exercise.name}
          </option>
        ))}
      </Select>
      <Button className="mx-auto" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default AddWorkoutExerciseForm;
