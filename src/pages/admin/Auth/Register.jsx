import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const isValidate = () => {
    let valid = true;
    const newError = {
      name: "",
      email: "",
      password: "",
    };

    if (email.trim() === "") {
      valid = false;
      newError.email = "Email is required";
    }

    if (password.trim() === "") {
      valid = false;
      newError.password = "Password is required";
    }

    setError(newError);
    console.log(newError);
    return valid;
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    if (!isValidate()) return;
    setError({
      name: "",
      email: "",
      password: "",
    });
    console.log({ email, password });
    // Server call
    navigate("/admin/dashboard");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-12 rounded-lg shadow-sm">
        <h2 className="text-[2rem] font-bold text-primary">Create an Account</h2>
        <p className="text-[1rem] text-gray-600">
          Have an Account?{" "}
          <Link to="/admin/login" className="text-primary underline">
            Sign In
          </Link>
        </p>
        <form className="mt-8" onSubmit={handleSubmitLogin}>
          <div className="flex flex-col gap-2 mb-4">
            <label className="text-gray-500">Name</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 border border-gray-400 rounded-sm text-gray-800 focus:outline-0 focus:border-primary placeholder:text-gray-300"
              placeholder="Enter Name"
            />
            {error.email && (
              <p className="text-sm text-red-500">{error.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label className="text-gray-500">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 border border-gray-400 rounded-sm text-gray-800 focus:outline-0 focus:border-primary placeholder:text-gray-300"
              placeholder="Enter Email Address"
            />
            {error.email && (
              <p className="text-sm text-red-500">{error.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 mb-8">
            <label className="text-gray-500">Password</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-2 border border-gray-400 rounded-sm text-gray-800 focus:outline-0 focus:border-primary placeholder:text-gray-300"
              placeholder="Enter Password"
            />
            {error.password && (
              <p className="text-sm text-red-500">{error.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full p-3 rounded-sm bg-primary text-white cursor-pointer hover:bg-navy-700"
          >
            Create Account
          </button>

          <div className="text-gray-500 text-center mt-6">
            By creating account, you agree to our
            <br />
            <Link className="text-sm text-blue-400 underline">
              Terms of Service
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
