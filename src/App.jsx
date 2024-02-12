import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './pages/AppLayout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';

/*
TODO: 2/11/2024
TODO:1. use github api to fetch user information
TODO:2. use github api to fetch user followers and etc  
TODO:3. parse the data and create ui for that 




*/
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
