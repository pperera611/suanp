import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';

const AuthContext = React.createContext({
    isLoggedIn: false,
    token: null,
    onLogin: () => {},
    onLogout: () => {}
});

export const AuthContextProvider = (props) => {
  
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();  

   
  const fakeAuth = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve("2342f2f1d131rf12"), 250);
    });

  useEffect(()=>{
    const storeToken = localStorage.getItem("token");
    if (storeToken !== null){
      setIsLoggedIn(true);
      setToken(storeToken);
    }
  },[])

  const handleLogin = async () => {
    const token = await fakeAuth();
    setToken(token);
    setIsLoggedIn(true);
    localStorage.setItem('token', token);
    
  };

  const handleLogout = () => {
    setToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    navigate("/login");
  };

  const value = {
    isLoggedIn: isLoggedIn,
    token: token,
    onLogin: handleLogin,
    onLogout: handleLogout
  };
  //console.log (value);

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;