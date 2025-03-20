import { forwardRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage";

const Sidebar = forwardRef(({ showNav }, ref) => {
  const [role, setRole] = useLocalStorage("role", "");
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside
      ref={ref}
      className="fixed z-10 w-64 h-full bg-gradient-to-b from-gray-50 to-white border-r border-gray-200 shadow-lg dark:from-gray-900 dark:to-gray-800 dark:border-gray-700"
    >
      <div className="flex justify-center mt-8 mb-8">
        <div className="p-3 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 text-white shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col text-darkColor dark:text-white px-3">
        <div className="mb-6">
          <h3 className="px-5 text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">
            Main Menu
          </h3>
          <div className="mt-3 space-y-1">
            <Link to="/dashboard">
              <div
                className={`px-4 py-3 rounded-lg flex items-center transition-all duration-200 ${
                  isActive("/dashboard")
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <div className="mr-3">
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
                      d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </div>
                <span className="font-medium">Dashboard</span>
              </div>
            </Link>

            <Link to="/user">
              <div
                className={`px-4 py-3 rounded-lg flex items-center transition-all duration-200 ${
                  isActive("/user")
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <div className="mr-3">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <span className="font-medium">Users</span>
              </div>
            </Link>

            <Link to="/banner">
              <div
                className={`px-4 py-3 rounded-lg flex items-center transition-all duration-200 ${
                  isActive("/banner")
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <div className="mr-3">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </div>
                <span className="font-medium">Banners</span>
              </div>
            </Link>

            <Link to="/promo">
              <div
                className={`px-4 py-3 rounded-lg flex items-center transition-all duration-200 ${
                  isActive("/promo")
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <div className="mr-3">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                    />
                  </svg>
                </div>
                <span className="font-medium">Promos</span>
              </div>
            </Link>

            <Link to="/category">
              <div
                className={`px-4 py-3 rounded-lg flex items-center transition-all duration-200 ${
                  isActive("/category")
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <div className="mr-3">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                    />
                  </svg>
                </div>
                <span className="font-medium">Categories</span>
              </div>
            </Link>

            <Link to="/activity">
              <div
                className={`px-4 py-3 rounded-lg flex items-center transition-all duration-200 ${
                  isActive("/activity")
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <div className="mr-3">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                    />
                  </svg>
                </div>
                <span className="font-medium">Activities</span>
              </div>
            </Link>

            <Link to="/profile">
              <div
                className={`px-4 py-3 rounded-lg flex items-center transition-all duration-200 ${
                  isActive("/profile")
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <div className="mr-3">
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
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="font-medium">Profile</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="px-5 text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">
            Additional
          </h3>
          <div className="mt-3 space-y-1">
            <Link to="/">
              <div className="px-4 py-3 rounded-lg flex items-center transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="mr-3 text-blue-500">
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
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </div>
                <span className="font-medium">Back to Home</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
