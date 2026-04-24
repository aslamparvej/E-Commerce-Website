import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-7.4375rem)]">
      <div>
        <h2 className="text-3xl font-semibold mb-2">
          Sign up for <span className="text-primary">Gadget Hunter</span>
        </h2>
        <p className="text-lg">Enter your details below</p>

        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="mb-8">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-2 border-b border-gray-300 text-lg focus:outline-none focus:border-primary placeholder:text-gray-400"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-8">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 border-b border-gray-300 text-lg focus:outline-none focus:border-primary placeholder:text-gray-400"
              placeholder="Email or Phone Number"
            />
          </div>
          <div className="mb-8">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 border-b border-gray-300 text-lg focus:outline-none focus:border-primary placeholder:text-gray-400"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white w-full py-3 px-6 rounded-md hover:bg-navy-700 transition duration-300"
          >
            Sign Up
          </button>

          <p className="text-sm text-gray-600 mt-12 text-center">
            Already have an account?<Link to="/login" className="text-sm ms-2 text-primary hover:underline">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
