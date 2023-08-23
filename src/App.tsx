import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Projects from './Projects';
import Profile from './Profile';
import Experience from './Experience';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Profile />,
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/experience",
    element: <Experience />
  }
]);

function App() {
  return (
    <div className='min-h-screen w-full mx-auto bg-black text-white'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
