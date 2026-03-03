import { createBrowserRouter } from "react-router-dom";
import EmployeesPage from "./pages/EmployeesPage";
import AttendancePage from "./pages/AttendancePage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/employee",
    element: <EmployeesPage />,
  },
  {
    path: "/attendance",
    element: <AttendancePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);