import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import useUpdate from "../../../hooks/useUpdate";
import AdminLayouts from "../Wrapper/AdminLayouts";
import { Switch } from "@headlessui/react";
import Button from "../../Elements/Button/Index";
import Loader from "../../Fragments/Global/Loader";
import Alert from "../../Fragments/Global/Alert";

const UserLayouts = () => {
  const [dataUser, setDataUser] = useState([]);
  const [visibleData, setVisibleData] = useState(6);
  const { data, loading, error } = useFetch("http://localhost:5000/users");
  const { updateItem } = useUpdate("http://localhost:5000/users");
  const [alert, setAlert] = useState({ show: false, message: "" });

  // Заглушки для отсутствующих полей
  const getMockData = (user) => ({
    ...user,
    profilePictureUrl: "https://via.placeholder.com/150", // Заглушка для фото
    phoneNumber: "+7 (XXX) XXX-XX-XX", // Заглушка для телефона
    fullName: `${user.name} ${user.lastName || ""}`.trim() // Объединение имени и фамилии
  });

  const handleRoleToggle = async (userId, currentRole) => {
    try {
      const updatedRole = currentRole === "admin" ? "user" : "admin";
      
      const payload = await updateItem(userId, { role: updatedRole });
      
      if (payload) {
        setDataUser(prev => prev.map(user => 
          user.id === userId ? { ...user, role: updatedRole } : user
        ));

        setAlert({
          show: true,
          message: "Role updated successfully!",
          headerMessage: "Success!",
          style: "text-green-700 bg-green-200 border-green-400",
        });
      }
    } catch (error) {
      setAlert({
        show: true,
        message: "Update failed!",
        headerMessage: "Error!",
        style: "text-red-700 bg-red-100 border-red-400",
      });
      console.error("Error updating user role:", error);
    }
    
    setTimeout(() => setAlert({ show: false, message: "" }), 3000);
  };

  useEffect(() => {
    if (data) {
      // Добавляем mock-данные для отсутствующих полей
      const usersWithMockData = data.map(user => getMockData(user));
      setDataUser(usersWithMockData);
    }
  }, [data]);

  // Остальной код остается без изменений
  const loadMore = () => setVisibleData(prev => prev + 6);
  const handleAlertClose = () => setAlert({ show: false, message: "" });

  return (
    <AdminLayouts>
      {alert.show && (
        <Alert
          headerMessage={alert.headerMessage}
          message={alert.message}
          classname={`fixed w-96 right-10 ${alert.style} top-20`}
          onClose={handleAlertClose}
        />
      )}
      
      <p className="mb-6 text-3xl font-bold text-darkColor dark:text-white">
        Users
      </p>

      {error && <p>{error?.message}</p>}

      {loading ? (
        <div className="absolute top-1/2 left-[43%] md:left-1/2">
          <Loader classname="w-12 h-12" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {dataUser.slice(0, visibleData).map((user, i) => (
              <div
                key={i}
                className="text-black bg-white rounded-lg shadow-md dark:bg-gray-700 h-80"
              >
                <img
                  alt="profile picture"
                  className="object-cover w-32 h-32 mx-auto align-middle rounded-full mt-7"
                  src={user.profilePictureUrl}
                />
                <figcaption className="mt-5 text-center">
                  <p className="mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300">
                    {user.fullName} {/* Используем объединенное имя */}
                  </p>
                  <p className="text-gray-500 dark:text-gray-300">
                    {user.email}
                  </p>
                  <p className="text-gray-500 dark:text-gray-300">
                    {user.phoneNumber} {/* Заглушка */}
                  </p>
                  
                  <div className="mt-4">
                    <label className="mr-2 text-gray-700 dark:text-white">
                      Admin
                    </label>
                    <Switch
                      className={`relative inline-flex items-center h-6 rounded-full w-11 ${
                        user.role === "admin" 
                          ? "bg-green-600" 
                          : "bg-primaryColor"
                      }`}
                      onClick={() => handleRoleToggle(user.id, user.role)}
                    >
                      <span className="sr-only">Toggle role</span>
                      <span
                        className={`${
                          user.role === "admin" 
                            ? "translate-x-1" 
                            : "translate-x-6"
                        } inline-block w-4 h-4 transform bg-white rounded-full`}
                      />
                    </Switch>
                    <label className="ml-2 text-gray-700 dark:text-white">
                      User
                    </label>
                  </div>
                </figcaption>
              </div>
            ))}
          </div>

          {visibleData < dataUser.length && (
            <div className="flex items-center justify-center py-8">
              <Button
                classname="px-4 py-2 text-white rounded-full bg-primaryColor"
                onClick={loadMore}
              >
                Load More
              </Button>
            </div>
          )}
        </>
      )}
    </AdminLayouts>
  );
};

export default UserLayouts;