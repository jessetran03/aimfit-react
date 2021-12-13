import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CreateUserMutation } from '../apollo';
import Button from '../components/Button';
import Input from '../components/Input';

interface ISignupProps {
  setClosed: () => void;
}

const Signup = ({ setClosed }: ISignupProps) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [createUser, { loading, error }] = useMutation(CreateUserMutation, {
    variables: {
      input: { firstName, lastName, username, password },
    },
    onCompleted: setClosed,
  });

  return (
    <div className="w-96">
      <div className="flex-row flex justify-center mb-6">
        <div className="text-4xl">Sign Up</div>
      </div>
      <form className="flex flex-col" onSubmit={() => createUser()}>
        <div className="flex flex-row space-x-3">
          <Input
            className="py-1.5 px-3 mb-3 w-1/2"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName((e.target as HTMLInputElement).value)}
          />
          <Input
            className="py-1.5 px-3 mb-3 w-1/2"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName((e.target as HTMLInputElement).value)}
          />
        </div>
        <Input
          className="py-1.5 px-3 mb-3"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername((e.target as HTMLInputElement).value)}
        />
        <Input
          className="py-1.5 px-3 mb-3"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
        />
        <Button className="py-1.5" primary>
          {loading ? 'Processing...' : 'Sign Up'}
        </Button>
        {error && <div className="text-red-300">{error}</div>}
      </form>
    </div>
  );
};

export default Signup;
