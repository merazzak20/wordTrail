import React from "react";
import { Helmet } from "react-helmet";

const Profile = () => {
  return (
    <div>
      <Helmet>
        <title>Profile - WordTrail</title>
        <meta name="description" content="Learn more about our company." />
        <meta name="keywords" content="about, company, information" />
      </Helmet>
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;
