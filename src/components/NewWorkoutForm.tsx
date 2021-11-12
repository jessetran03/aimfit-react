import { FormEvent } from 'react';
import Input from './Input';
import Button from './Button';
import Select from './Select';

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
      <Select onChange={(e) => setDay((e.target as HTMLInputElement).value)}>
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
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default NewWorkoutForm;
