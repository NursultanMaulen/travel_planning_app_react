import { useEffect, useState } from "react";
import useCreate from "../../../hooks/usePost";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage";
import Modal from "../Global/Modal";
import Alert from "../Global/Alert";

const FormRegister = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [role, setRole] = useState("admin");
  const [phoneNumber, setPhoneNumber] = useState();
  const navigate = useNavigate();
  const [profilePictureName, setProfilePictureName] = useState("");
  const [profilePictureFile, setProfilePictureFile] = useState(null);
  const [token, setToken] = useLocalStorage("authToken", "");
  const [showPreview, setShowPreview] = useState(false);
  const [previewImageUrl, setPreviewImageUrl] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordRepeatError, setPasswordRepeatError] = useState("");
  const [alert, setAlert] = useState({ show: false, message: "" });

  const { createItem: handleRegister } = useCreate("users");

  const handleAlertClose = () => {
    setAlert({ show: false, message: "" });
  };

  const validateForm = () => {
    let isValid = true;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!emailPattern.test(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError(
        "Password' field length must be greater than or equal to 6 characters long"
      );
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (passwordRepeat.trim() === "") {
      setPasswordRepeatError("Password repeat is required");
      isValid = false;
    } else if (password !== passwordRepeat) {
      setPasswordRepeatError("Passwords do not match");
      isValid = false;
    } else {
      setPasswordRepeatError("");
    }

    setIsFormValid(isValid);
  };

  useEffect(() => {
    validateForm();
  }, [name, email, password, passwordRepeat]);

  const openImagePreview = () => {
    if (profilePictureFile) {
      const imageUrl = URL.createObjectURL(profilePictureFile);
      setPreviewImageUrl(imageUrl);
      setShowPreview(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordRepeat) {
      return setAlert({ show: true, message: "Passwords do not match" });
    }

    const newUser = { email, name, lastName, password, role };
    try {
      await handleRegister(newUser);
      setAlert({ show: true, message: "Registration successful!" });
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setAlert({ show: true, message: "Failed to register" });
    }
  };

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

      <div className="flex flex-col pt-4 w-[100%]">
        <div className="flex items-center gap-1">
          <label htmlFor="lastName" className="text-sm text-gray-600">
            Email
          </label>
          <span className="text-xs text-gray-400">(required)</span>
        </div>
        <input
          type="email"
          id="email"
          placeholder="your@email.com"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-8 px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        <p className="text-xs text-red-600">{emailError}</p>
      </div>

      <div className="flex flex-row gap-2 w-[100%]">
        <div className="flex flex-col pt-4 w-[50%]">
          <div className="flex items-center gap-1">
            <label htmlFor="name" className="text-sm text-gray-600">
              First Name
            </label>
            <span className="text-xs text-gray-400">(optional)</span>
          </div>
          <input
            type="text"
            id="name"
            placeholder="Your first name"
            onChange={(e) => setName(e.target.value)}
            className="w-full h-8 px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
          <p className="text-xs text-red-600">{nameError}</p>
        </div>

        <div className="flex flex-col pt-4 w-[50%]">
          <div className="flex items-center gap-1">
            <label htmlFor="lastName" className="text-sm text-gray-600">
              Last Name
            </label>
            <span className="text-xs text-gray-400">(optional)</span>
          </div>
          <input
            type="text"
            id="lastName"
            placeholder="Your last name"
            onChange={(e) => setLastName(e.target.value)}
            className="w-full h-8 px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>

      <div className="flex flex-row gap-2 w-[100%]"></div>
      <div className="flex flex-row gap-2 w-[100%]">
        <div className="flex flex-col pt-4 w-[50%]">
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-8 px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
          <p className="text-xs text-red-600">{passwordError}</p>
        </div>
        <div className="flex flex-col pt-4 w-[50%]">
          <input
            type="password"
            id="confirm_password"
            placeholder="Confirm Password"
            onChange={(e) => setPasswordRepeat(e.target.value)}
            className="w-full h-8 px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
          <p className="text-xs text-red-600">{passwordRepeatError}</p>
        </div>
      </div>

      <button
        disabled={!isFormValid}
        type="submit"
        className="p-2 mt-6 h-8 items-center flex justify-center text-md font-bold text-white bg-[#015AB8] hover:bg-gray-700 rounded"
        onSubmit={handleSubmit}
      >
        Register
      </button>
      <Modal
        classname="items-center rounded-full w-96 h-96"
        isVisible={showPreview}
        onClose={() => setShowPreview(false)}
      >
        <img
          src={previewImageUrl}
          alt="Pratinjau Gambar"
          className="object-cover rounded-full w-[95%] h-[95%]"
        />
      </Modal>
    </form>
  );
};

export default FormRegister;
