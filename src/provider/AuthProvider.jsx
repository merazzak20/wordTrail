import React, { createContext } from "react";

const AuthProvider = ({ children }) => {
  const AuthContext = createContext();

  const authInfo = {};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
