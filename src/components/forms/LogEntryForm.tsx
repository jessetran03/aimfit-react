import { FormEvent } from 'react';
import Input from '../Input';
import Button from '../Button';
// import Select from './Select';

interface ILogEntryProps {
  onSubmit: () => void;
  setSetCount: (setCount: number) => void;
  setRepCount: (repCount: number) => void;
  setWeightCount: (weightCount: number) => void;
}

const LogEntry = ({
  onSubmit,
  setSetCount,
  setRepCount,
  setWeightCount,
}: ILogEntryProps) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
      <h2 className="text-lg mb-2 text-center">Add Log Entry</h2>
      <Input
        autoFocus
        placeholder="Set Count"
        required
        type="number"
        onChange={(e) =>
          setSetCount(Number((e.target as HTMLInputElement).value))
        }
      />
      <Input
        placeholder="Rep Count"
        required
        type="number"
        onChange={(e) =>
          setRepCount(Number((e.target as HTMLInputElement).value))
        }
      />
      <Input
        placeholder="Weight Count"
        required
        type="number"
        onChange={(e) =>
          setWeightCount(Number((e.target as HTMLInputElement).value))
        }
      />
      <Button primary className="mx-auto" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default LogEntry;
