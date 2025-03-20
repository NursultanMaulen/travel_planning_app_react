import "./App.css";
import { useRoutes } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import DashboardPage from "./pages/dashboard";
import UserPage from "./pages/user";
import BannerPage from "./pages/banner";
import PromoPage from "./pages/promo";
import NotFoundPage from "./pages/NotFound";
import ProtectedRoute from "./routes/ProtectedRoute";
import CategoryPage from "./pages/category";
import ProfilePage from "./pages/profile";
import HomePage from "./pages/home";
import ActivityPage from "./pages/activity";
import ProtectedProfile from "./routes/ProtectedProfile";
import DetailActivityPage from "./pages/detailActivity";
import EditActivityPage from "./pages/editActivity";
import EditPromoPage from "./pages/editPromo";
import AddActivityPage from "./pages/addActivity";
import AddPromoPage from "./pages/addPromo";
import LoginSignupContext from "./context/loginSignUpContext";

const routes = [
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/banner",
    element: (
      <ProtectedProfile>
        <BannerPage />
      </ProtectedProfile>
    ),
  },
  {
    path: "/promo",
    element: (
      <ProtectedProfile>
        <PromoPage />
      </ProtectedProfile>
    ),
  },
  {
    path: "/addPromo",
    element: (
      <ProtectedProfile>
        <AddPromoPage />
      </ProtectedProfile>
    ),
  },
  {
    path: "/editPromo/:id",
    element: (
      <ProtectedProfile>
        <EditPromoPage />
      </ProtectedProfile>
    ),
  },
  {
    path: "/category",
    element: (
      <ProtectedProfile>
        <CategoryPage />
      </ProtectedProfile>
    ),
  },
  {
    path: "/user",
    element: (
      <ProtectedProfile>
        <UserPage />
      </ProtectedProfile>
    ),
  },
  {
    path: "/activity",
    element: (
      <ProtectedProfile>
        <ActivityPage />
      </ProtectedProfile>
    ),
  },
  {
    path: "/detailActivity/:id",
    element: (
      <ProtectedProfile>
        <DetailActivityPage />
      </ProtectedProfile>
    ),
  },
  {
    path: "/editActivity/:id",
    element: (
      <ProtectedProfile>
        <EditActivityPage />
      </ProtectedProfile>
    ),
  },
  {
    path: "/addActivity",
    element: (
      <ProtectedProfile>
        <AddActivityPage />
      </ProtectedProfile>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedProfile>
        <ProfilePage />
      </ProtectedProfile>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedProfile>
        <DashboardPage />
      </ProtectedProfile>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

function App() {
  const element = useRoutes(routes);
  return <LoginSignupContext>{element}</LoginSignupContext>;
}

export default App;
