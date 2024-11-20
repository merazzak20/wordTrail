import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { updateUserProfile, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const name = form.get("name");
    const photo = form.get("photo");
    // console.log(name, photo);

    updateUserProfile({ displayName: name, photoURL: photo });
    // console.log(user);
    navigate("/profile");
  };
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-center font-semibold text-2xl">
          Update Your Information
        </h2>
        <form onSubmit={handleUpdate} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Update</button>
          </div>

          {/* {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          {success && <p className="text-green-600">Successfully Sign In</p>} */}
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
