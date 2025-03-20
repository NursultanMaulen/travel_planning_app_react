import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage";

const ProfileButton = () => {
  const navigate = useNavigate();
  const [userId] = useLocalStorage("userId", "");
  const [userData, setUserData] = useLocalStorage("userData", null);

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <button
      onClick={handleProfileClick}
      className="flex items-center px-3 py-2 text-sm font-medium text-black rounded-md hover:bg-blue-600"
    >
      <div className="flex items-center justify-center w-8 h-8 mr-2 text-sm font-bold text-white bg-blue-500 rounded-full">
        {userData?.name?.charAt(0) || ""}
        {userData?.lastName?.charAt(0) || ""}
      </div>
      <span>Profile</span>
    </button>
  );
};

export default ProfileButton;
