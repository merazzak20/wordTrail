import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const ForgotPass = () => {
  const { passwordReset } = useContext(AuthContext);
  const handleForgot = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");

    passwordReset(email)
      .then(() => {
        toast.success("Password reset link has been sent to your email.");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(`Error: ${errorMessage}`);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-center font-semibold text-2xl">Place Eour Email</h2>
        <form onSubmit={handleForgot} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Send Mail</button>
          </div>

          {/* {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          {success && <p className="text-green-600">Successfully Sign In</p>} */}
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;
