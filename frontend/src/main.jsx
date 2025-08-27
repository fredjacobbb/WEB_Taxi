import { createBrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import Layout from './routes/layout.jsx'
import Home from './routes/home.jsx'
import RendezVous from './routes/rendez-vous.jsx'
import { RouterProvider } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import "./index.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {index: true, element: <Home />},
      {path: "rendez-vous", element: <RendezVous />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
