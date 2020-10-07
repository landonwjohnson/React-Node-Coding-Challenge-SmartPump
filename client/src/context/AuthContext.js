import React, { createContext, useState, useEffect } from "react";
import { getJWT } from "../services/axios/config";
import jwt_decode from "jwt-decode";
import { LOGIN } from "../components/Layout/routes";

let AuthUserContext;
const { Provider, Consumer } = (AuthUserContext = createContext());


export let defaultUserJson = {
  _id: null,
  guid: "",
  isActive: true,
  balance: "",
  picture: "",
  age: 0,
  eyeColor: "",
  name: {
    first: "",
    last: "",
  },
  company: "",
  email: "",
  password: "",
  phone: "",
  address: "",
};


const AuthProvider = (props) => {
  let { children, history } = props;
  const [user, setUser] = useState(defaultUserJson);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      loadData(isSubscribed);
    }
    return () => (isSubscribed = false);
  }, [user._id]);

  const loadData = () => {
    let token = localStorage.getItem("jwt");
    console.log(token)
    if (token) {
      const decoded = jwt_decode(token);
      if (decoded) {
        setUser(decoded);
        setReady(true);
      }
    } else {
      console.log("there is no token");
    }
  };

  const handleSignOut = () => {
    console.log(props, 'this is props in handle sign out')
    localStorage.removeItem("jwt");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    setTimeout(() => {
      history.push(LOGIN)
      setUser(defaultUserJson);
    }, 200);
 
  };


  return (
    <Provider value={{ user, setUser, ready, setReady, handleSignOut }}>
      {typeof window !== "undefined" ? children : ""}
    </Provider>
  );
};

export { AuthProvider, Consumer as AuthConsumer, AuthUserContext };
export default AuthUserContext;
