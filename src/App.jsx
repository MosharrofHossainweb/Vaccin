
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Home from './Pages/Home'

function App() {
  
const myrout=createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<Layout/>}/>
    <Route index element={<Home/>}/>
    <Route/>
  </Route>
  

))
  return (
    <>
        <RouterProvider router={myrout} />
        
    </>
  )
}

export default App
