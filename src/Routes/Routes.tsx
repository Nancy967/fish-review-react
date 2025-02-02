import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import FishPage from "../Pages/CompanyPage/CompanyPage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import FishReviews from "../Components/FishReviews/FishReviews";
import DesignGuide from "../Pages/DesignGuide/DesignGuide";
import CareSheet from "../Components/CareSheet/CareSheet";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      {
        path: "search",
        element: (
          <ProtectedRoute>
            <SearchPage />
          </ProtectedRoute>
        ),
      },
      { path: "design-guide", element: <DesignGuide /> },
      {
        path: "fish/:ticker",
        element: (
          <ProtectedRoute>
            <FishPage />
          </ProtectedRoute>
        ),
        children: [
          { path: "fish-profile", element: <FishReviews /> },
          { path: "care-sheet", element: <CareSheet /> },
        ],
      },
    ],
  },
]);
