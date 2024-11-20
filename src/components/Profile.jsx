import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);
  const { displayName, photoURL, email } = user;
  console.log(loading);

  if (loading) {
    return (
      <div className="text-center">
        <h1 className="text-xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center">
        <h1 className="text-xl font-bold">User not logged in</h1>
        <Link to="/login" className="btn btn-primary mt-4">
          Login
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Profile - WordTrail</title>
        <meta name="description" content="Learn more about our company." />
        <meta name="keywords" content="about, company, information" />
      </Helmet>
      <div className="container mx-auto px-12 text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 my-5">
          Welcome {displayName}
        </h1>
        <div>
          <div className=" mx-auto">
            <img
              className="mx-auto rounded-md w-40 h-40 object-cover"
              src={photoURL}
              alt=""
            />
          </div>
          <div>
            <p className="my-4 font-medium">{email}</p>
          </div>
        </div>
        <Link to="/updateProfile" className="btn btn-neutral rounded-none my-6">
          Update
        </Link>
      </div>
    </div>
  );
};

export default Profile;
