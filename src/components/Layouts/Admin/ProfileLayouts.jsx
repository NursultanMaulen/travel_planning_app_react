import { useState, useEffect } from "react";
import AdminLayouts from "../Wrapper/AdminLayouts";
import axios from "axios";
import useLocalStorage from "../../../hooks/useLocalStorage";
import Loader from "../../Fragments/Global/Loader";
import Alert from "../../Fragments/Global/Alert";

const ProfileLayouts = () => {
  const [token] = useLocalStorage("authToken", "");
  const [userId] = useLocalStorage("userID", "");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: "" });
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/users/${userId}`);
      setUserData(response.data);
      setFormData({
        name: response.data.name || "",
        lastName: response.data.lastName || "",
        email: response.data.email || "",
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [userId]);

  const handleAlertClose = () => {
    setAlert({ show: false, message: "" });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        ...userData,
        name: formData.name,
        lastName: formData.lastName,
        email: formData.email,
      };

      await axios.put(`http://localhost:5000/users/${userId}`, updatedData);
      fetchUserData();

      setAlert({
        show: true,
        message: "Profile successfully updated!",
        headerMessage: "Success!",
        style: "text-green-700 bg-green-200 border-green-400 w-96",
      });

      setTimeout(() => setAlert({ show: false, message: "" }), 3000);
    } catch (error) {
      setAlert({
        show: true,
        message: error?.message || "Error updating profile",
        headerMessage: "Error!",
        style: "text-red-700 bg-red-100 border-red-400 w-96",
      });
      setTimeout(() => setAlert({ show: false, message: "" }), 3000);
      console.error("Error updating profile:", error);
    }
  };

  if (error) return <p>Error: {error.message}</p>;
  if (!userData) return <p>User data unavailable.</p>;

  return (
    <AdminLayouts>
      {alert?.show && (
        <Alert
          headerMessage={alert.headerMessage}
          message={alert.message}
          classname={`fixed right-10 ${alert.style} top-20 z-50`}
          onClose={handleAlertClose}
        />
      )}
      <div className="p-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="mb-8 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Profile
          </h1>
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <Loader classname="w-12 h-12" />
            </div>
          ) : (
            <div className="grid w-full grid-cols-1 gap-8 pb-8 lg:grid-cols-6">
              <div className="flex flex-col justify-center p-8 bg-white shadow-xl lg:col-span-2 rounded-2xl dark:bg-gray-800 dark:text-gray-100 border border-gray-100 dark:border-gray-700">
                <div className="relative mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-70 animate-pulse"></div>
                  <div className="flex items-center justify-center w-36 h-36 relative z-10 overflow-hidden text-4xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 border-4 border-white rounded-full shadow-xl">
                    {(userData.name || "").charAt(0)}
                    {(userData.lastName || "").charAt(0)}
                  </div>
                </div>
                <div className="space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      {userData.name} {userData.lastName || ""}
                    </h2>
                    <div className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {userData.role}
                    </div>
                  </div>
                  <div className="flex justify-center items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <span>{userData.email}</span>
                  </div>

                  <div className="flex justify-center flex-wrap gap-2 pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300">
                      Registration date: {new Date().toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 p-8 bg-white border border-gray-100 rounded-2xl shadow-xl dark:border-gray-700 dark:bg-gray-800 lg:col-span-4">
                <form
                  className="flex flex-col space-y-6"
                  onSubmit={handleUpdateProfile}
                >
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      Edit Profile
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Update your personal information to improve service
                      interaction
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your first name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 mt-1 text-gray-700 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full px-4 py-3 mt-1 text-gray-700 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 mt-1 text-gray-700 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:-translate-y-0.5"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayouts>
  );
};

export default ProfileLayouts;
