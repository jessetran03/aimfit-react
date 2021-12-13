import { Dispatch, SetStateAction, FormEvent, useState } from 'react';
import axios from 'axios';
import Signup from '../components/Signup';
import Modal from '../components/Modal';
import useModal from '../hooks/useModal';
import Input from '../components/Input';
import Button from '../components/Button';
import { DEMO_USERNAME, DEMO_PASSWORD } from '../config';

interface ILoginProps {
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setLoggedIn }: ILoginProps) => {
  const { isOpen, setOpen, setClosed } = useModal();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState(null);
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const [demoLoading, setDemoLoading] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    axios
      .post('/login', {
        username,
        password,
      })
      .then((res) => {
        setLoginLoading(false);
        localStorage.setItem('authToken', res.data.token);
        setLoggedIn(true);
      })
      .catch((res) => {
        setError(res.error);
        setLoginLoading(false);
      });
  };

  const handleDemo = (e: FormEvent) => {
    e.preventDefault();
    setDemoLoading(true);
    axios
      .post('/login', {
        username: DEMO_USERNAME,
        password: DEMO_PASSWORD,
      })
      .then((res) => {
        setDemoLoading(false);
        localStorage.setItem('authToken', res.data.token);
        setLoggedIn(true);
      })
      .catch(() => setDemoLoading(false));
  };

  return (
    <div className="w-screen h-screen bg-gray-200 flex flex-col justify-center items-center">
      <div className="flex flex-col text-center bg-white w-96 h-auto shadow-md border rounded-xl px-12 py-10 mb-8">
        <div className="flex-row flex justify-center mb-6 space-x-1.5">
          <img
            src="/aimfit-icon.png"
            alt="Aimfit logo"
            className="w10 h-10 rounded-md"
          />
          <div className="text-4xl">
            Aim<span className="font-semibold">Fit</span>
          </div>
        </div>
        <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
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
            {loginLoading ? 'Processing...' : 'Login'}
          </Button>
          {error && <div className="text-red-300">{error}</div>}
        </form>
        <br />
        <hr className="border-gray-300" />
        <br />
        <div className="mb-1 text-sm">Don&apos;t have an account?</div>
        <Button
          className="hover:bg-gray-100 text-secondary border border-secondary w-2/3 m-auto"
          onClick={() => setOpen()}
        >
          Sign Up
        </Button>
        <div className="my-0.5 text-sm">or</div>
        <Button
          className={`bg-green-400 hover:bg-green-500 w-2/3 m-auto ${
            demoLoading && 'disabled'
          }`}
          onClick={(e) => handleDemo(e)}
        >
          {demoLoading ? 'Processing...' : 'Demo'}
        </Button>
      </div>
      <div>
        <strong>Aim</strong> to be <strong>Fit</strong>. Begin your journey.
      </div>
      <Modal isOpen={isOpen} setClosed={setClosed}>
        <Signup setClosed={setClosed} />
      </Modal>
    </div>
  );
};

export default Login;
