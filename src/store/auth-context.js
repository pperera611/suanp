import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  
  const [token, setToken] = useState(null);
  const navigate = useNavigate();  

   /* 
  const fakeAuth = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve("2342f2f1d131rf12"), 250);
    });*/

  const handleLogin = async () => {
    //const token = await fakeAuth();
    const token = "asasadsadsad";
    setToken(token);
    console.log("llego");
  };

  const handleLogout = () => {
    setToken(null);
    navigate("/login");
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };


  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;