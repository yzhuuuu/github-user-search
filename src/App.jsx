import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './pages/AppLayout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';

/*


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
