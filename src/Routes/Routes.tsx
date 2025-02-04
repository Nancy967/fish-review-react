import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import FishPage from "../Pages/FishPage/FishPage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import FishReviews from "../Components/FishReviews/FishReviews";
import DesignGuide from "../Pages/OverviewPage/OverviewPage";
import CareGuide from "../Components/CareGuide/CareGuide";
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
      { path: "overview", element: <DesignGuide /> },
      {
        path: "fish/:scientificName",
        element: (
          <ProtectedRoute>
            <FishPage />
          </ProtectedRoute>
        ),
        children: [
          { path: "fish-info", element: <FishReviews /> },
          { path: "care-guide", element: <CareGuide /> },
        ],
      },
    ],
  },
]);
