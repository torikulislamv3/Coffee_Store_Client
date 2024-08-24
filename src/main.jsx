import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AddCoffe from './Components/AddCoffe';
import UpdateCoffee from './Components/UpdateCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path :"AddCoffee",
    element : <AddCoffe></AddCoffe>
  },
  {
    path : "UpdateCoffe",
    element : <UpdateCoffee></UpdateCoffee> 
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
