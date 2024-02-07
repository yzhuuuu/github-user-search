import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import AppLayout from "./pages/AppLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
