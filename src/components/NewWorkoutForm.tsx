import { FormEvent } from 'react';
import Input from './Input';
import Button from './Button';

interface INewWorkoutFormProps {
  onSubmit: () => void;
  setDay: (day: string) => void;
  setTitle: (title: string) => void;
}

const NewWorkoutForm = ({
  onSubmit,
  setDay,
  setTitle,
}: INewWorkoutFormProps) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
      <Input
        autoFocus
        placeholder="Workout Name"
        required
        onChange={(e) => setTitle((e.target as HTMLInputElement).value)}
      />
      <Input onChange={(e) => setDay((e.target as HTMLInputElement).value)} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default NewWorkoutForm;
