import { useMutation } from '@apollo/client';
import { CreateUserMutation } from '../apollo';
import Button from '../components/Button';
import Input from '../components/Input';
import { LoadingIcon } from '../utils/icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface ISignupProps {
  setClosed: () => void;
}

const SignupSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .max(70, 'Username must be less than 70 characters')
    .required('Required'),
  password: Yup.string()
    .required('Required')
    .min(8, 'Password must be longer than 8 characters')
    .max(72, 'Password must be less than 72 characters')
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/,
      'Password must contain at least one upper case, lower case, number, and special character',
    ),
});

const Signup = ({ setClosed }: ISignupProps) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      createUser({
        variables: {
          input: { ...values },
        },
      });
    },
  });

  const [createUser, { loading, error }] = useMutation(CreateUserMutation, {
    onCompleted: setClosed,
  });

  return (
    <div className="w-80 sm:w-96">
      <div className="flex-row flex justify-center mb-6">
        <div className="text-3xl">Sign Up</div>
      </div>
      <form className="flex flex-col" onSubmit={formik.handleSubmit}>
        <div className="flex flex-row space-x-3">
          <div className="flex-col w-1/2">
            <Input
              className="py-1.5 px-3 w-full"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.errors.firstName && formik.touched.firstName && (
              <div className="text-red-500 text-sm">
                {formik.errors.firstName}
              </div>
            )}
          </div>
          <div className="flex-col w-1/2">
            <Input
              className="py-1.5 px-3 w-full"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.errors.lastName && formik.touched.lastName && (
              <div className="text-red-500 text-sm">
                {formik.errors.lastName}
              </div>
            )}
          </div>
        </div>
        <Input
          className="py-1.5 px-3 mt-3"
          id="username"
          name="username"
          placeholder="Username"
          value={formik.values.username}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.errors.username && formik.touched.username && (
          <div className="text-red-500 text-sm">{formik.errors.username}</div>
        )}

        <Input
          className="py-1.5 px-3 mt-3"
          id="password"
          name="password"
          placeholder="Password"
          type="password"
          value={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.errors.password && formik.touched.password && (
          <div className="text-red-500 text-sm">{formik.errors.password}</div>
        )}
        <Button className="py-1.5 mt-6" type="submit" primary>
          {loading ? <LoadingIcon /> : 'Sign Up'}
        </Button>
        {error && (
          <div className="text-red-500 text-sm">
            Account could not be created. Please try again.
          </div>
        )}
      </form>
    </div>
  );
};

export default Signup;
