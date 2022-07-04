/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUpForm({ setUser }) {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // We don't want to send the confirm or error properties
      // Let's make a copy of this.state (we never want to directly modify the state obj)
      const formData = { ...data };
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      setUser(user);
      if (user) navigate('/construction')
    } catch {
      // An error occurred
      setData({ ...data, error: 'Sign Up Failed - Try Again!' });
    }
  };

  const handleChange = (evt) => {
    // Unlike setters in function components,
    // this.setState MERGES the provided object, it does
    // NOT replace it
    setData({ ...data, [evt.target.name]: evt.target.value, error: '' });
  };

  const disable = data.password !== data.confirm;
  return (
    <>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-gray-100 px-6 py-8 rounded shadow-md text-black w-full">
            {data.error && (
              <p className="error-message  mb-4 text-center bg-red-400 p-2 text-white rounded font-bold">
                &nbsp;{data.error}
              </p>
            )}
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-1 focus:ring-sky-500"
                name="name"
                placeholder="Full Name"
                value={data.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-1 focus:ring-sky-500"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={handleChange}
                required
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-1 focus:ring-sky-500"
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-1 focus:ring-sky-500"
                name="confirm"
                placeholder="Confirm Password"
                value={data.confirm}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className={`w-full text-center py-3 rounded ${
                  disable ? 'bg-green-300' : 'bg-green-600'
                }  text-white hover:bg-green-dark focus:outline-none my-1 font-bold`}
                disabled={disable === true}
              >
                Create Account
              </button>
            </form>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the{' '}
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?{' '}
            <Link
              to="/login"
              className="no-underline border-b border-blue text-purple-800 font-semibold"
            >
              Log in
            </Link>
            .
          </div>
        </div>
      </div>
    </>
  );
}
