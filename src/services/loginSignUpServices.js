import { React } from "react";
import { toast } from "react-toastify";

export const logoutHandler = (dispatch) => {
  localStorage.clear();
  dispatch({ type: "LOGOUT" });
  toast.success("Logout success!");
};

export const signUpHandler = async (userData) => {
  try {
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to sign up");
    }

    toast.success("Signup success!");
  } catch (error) {
    console.error("Error during signup:", error);
    toast.error("Signup failed. Please try again.");
  }
};

export const loginHandler = async (email, password, dispatch) => {
  try {
    dispatch({ type: "LOADING", payload: true });

    const response = await fetch("http://localhost:5000/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();

    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      console.log("USER FOUND", foundUser);
      localStorage.setItem("authToken", foundUser.id);
      localStorage.setItem("userID", foundUser.id);
      console.log("AUTH TOKEN SET: ", localStorage.getItem("authToken"));

      localStorage.setItem("userData", JSON.stringify(foundUser));

      dispatch({ type: "LOGINDATA", payload: foundUser });

      toast.success(`Welcome ${foundUser.name}!`);
      return { success: true };
    } else {
      console.error("Invalid email or password");
      return { success: false, message: "Invalid email or password" };
    }
  } catch (error) {
    console.error("Error during login:", error);
    return { success: false, message: error.message };
  } finally {
    dispatch({ type: "LOADING", payload: false });
  }
};
