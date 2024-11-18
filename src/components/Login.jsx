import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const handleSignIn = () => {};
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-center font-semibold text-2xl">
          Login Your Account
        </h2>
        <form onSubmit={handleSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>

          <div className="mx-auto my-5">
            <button className="flex justify-arround items-center gap-4 bg-gray-100 btn">
              <FaGoogle />
              <span className="font-semibold">Login with Google</span>
            </button>
          </div>

          {/* {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          {success && <p className="text-green-600">Successfully Sign In</p>} */}

          <p className="text-center ">
            Don't have an account?{" "}
            <Link className="text-red-500" to="/register">
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
