import { FormEvent } from 'react';
import Input from '../Input';
import Button from '../Button';
// import Select from './Select';

interface INewExerciseFormProps {
  onSubmit: () => void;
  setName: (name: string) => void;
  setMuscle: (muscle: string) => void;
}

const NewExerciseForm = ({
  onSubmit,
  setName,
  setMuscle,
}: INewExerciseFormProps) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
      <h2 className="text-lg mb-2 text-center">Add Log Entry</h2>
      <Input
        autoFocus
        placeholder="Exercise name"
        required
        onChange={(e) =>
          setName((e.target as HTMLInputElement).value)
        }
      />
      <Input
        placeholder="Muscle"
        required
        onChange={(e) =>
          setMuscle((e.target as HTMLInputElement).value)
        }
      />
      <Button primary className="mx-auto" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default NewExerciseForm;
