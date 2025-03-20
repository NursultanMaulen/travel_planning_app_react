import React, { createContext, useContext, useReducer } from "react";

import { useEffect } from "react";
import { toast } from "react-toastify";

const loginSignupContext = createContext();
export const useLoginSignupContext = () => useContext(loginSignupContext);

function LoginSignupContext({ children }) {
  const [state, dispatch] = useReducer(reducerFn, {
    name: "",
    email: "",
    password: "",
    loginData: {},
    isAuthenticated: false,
  });

  function reducerFn(state, action) {
    switch (action.type) {
      case "NAME":
        return { ...state, name: action.payload };
      case "EMAIL":
        return { ...state, email: action.payload };
      case "PASSWORD":
        return { ...state, password: action.payload };
      case "LOGINDATA":
        return {
          ...state,
          loginData: action.payload,
          isAuthenticated: true,
        };
      case "LOGOUT":
        return {
          ...state,
          name: "",
          email: "",
          password: "",
          loginData: {},
          isAuthenticated: false,
        };
      default:
        return state;
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("userData"));
      dispatch({ type: "LOGINDATA", payload: user });
    }
  }, []);

  const updateUserDataOnServer = async (userId, updatedData) => {
    try {
      const response = await fetch(`http://localhost:5000/users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Failed to update user data");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      toast.error("Failed to update liked videos.");
    }
  };

  const { name, email, password, loginData, isAuthenticated } = state;

  return (
    <loginSignupContext.Provider
      value={{
        state,
        dispatch,
        name,
        email,
        password,
        loginData,
        isAuthenticated,
      }}
    >
      {children}
    </loginSignupContext.Provider>
  );
}

export default LoginSignupContext;
