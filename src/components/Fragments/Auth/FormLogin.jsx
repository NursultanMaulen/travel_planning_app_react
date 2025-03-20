import { useState, useRef, useEffect } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";
import Alert from "../Global/Alert";
import { loginHandler } from "../../../services/loginSignUpServices";
import { useLoginSignupContext } from "../../../context/loginSignUpContext";
import { useNavigate } from "react-router-dom";

const FormLogin = (state) => {
  const { dispatch, email, password } = useLoginSignupContext();
  const [token, setToken] = useLocalStorage("authToken", "");
  const [role, setRole] = useLocalStorage("role", "");
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [alert, setAlert] = useState({ show: false, message: "" });
  const navigate = useNavigate();

  const handleAlertClose = () => {
    setAlert({ show: false, message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginHandler(email, password, dispatch);
    if (res.success) {
      setAlert({ show: true, message: "Login successful!" });
      navigate("/dashboard");
    } else {
      setAlert({ show: true, message: "Invalid email or password" });
    }
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    setEmailError(isEmailValid || email.trim() === "" ? "" : "Invalid email");

    setIsFormValid(
      email.trim() !== "" && password.trim() !== "" && isEmailValid
    );
  }, [email, password]);

  return (
    <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
      {alert?.show && (
        <Alert
          headerMessage={alert.headerMessage}
          message={alert.message}
          classname={`fixed right-10 ${alert.style} top-20`}
          onClose={handleAlertClose}
        />
      )}
      <div className="flex flex-col pt-4">
        <label htmlFor="email" className="text-lg dark:text-white">
          Email
        </label>
        <input
          autoComplete="yes"
          type="email"
          id="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => dispatch({ type: "EMAIL", payload: e.target.value })}
          onBlur={() =>
            setEmailError(email.trim() === "" ? "Email must not be empty" : "")
          }
          className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          ref={emailRef}
        />
        <span className="text-sm text-red-500">{emailError}</span>
      </div>

      <div className="flex flex-col pt-4">
        <label htmlFor="password" className="text-lg dark:text-white">
          Password
        </label>
        <input
          autoComplete="no"
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            dispatch({ type: "PASSWORD", payload: e.target.value })
          }
          onBlur={() =>
            setPasswordError(
              password.trim() === "" ? "Password must not be empty" : ""
            )
          }
          className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        <span className="text-sm text-red-500">{passwordError}</span>
      </div>

      <button
        type="submit"
        className={`p-2 mt-8 text-lg font-bold text-white rounded bg-[#015AB8] hover:bg-gray-700 ${
          !isFormValid && "opacity-50 cursor-not-allowed"
        }`}
        disabled={!isFormValid}
      >
        Login
      </button>
    </form>
  );
};

export default FormLogin;
