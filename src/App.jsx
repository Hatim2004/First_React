import Root from "./pages/Root";
import Home from "./pages/Home"
import Create from "./pages/Create";
import{
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
}from "react-router-dom"

const router = createBrowserRouter(  
  createRoutesFromElements(
    <Route path="/"      element={<Root />}>
    <Route index         element={<Home />}/>
    <Route path="create" element={<Create />}/>
    </Route>
    )
);
export default function MyApp(){
  
  return(
    <>
    <RouterProvider router={router}/>
    </>
  )
}


