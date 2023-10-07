
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import RootLayout from './layouts/RootLayout'

import Home from './components/Home';
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";



function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home/>} />
        <Route path='destination' element={<Destination/>} />
        <Route path='crew' element={<Crew/>} />
        <Route path='technology' element={<Technology/>} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
