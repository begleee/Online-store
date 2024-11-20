import { createBrowserRouter, createRoutesFromElements, NavLink, Outlet, Route, RouterProvider } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About'

export default function Nav() {
  return (
    <>
        <RouterProvider router={
            createBrowserRouter(
                createRoutesFromElements(
                    <Route path='/' element={<Layout/>}>
                        <Route index path='/' element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Route>
                )
            )
        }
        />
    </>
  )
}

const Layout = () => {
    return <>
        <nav className="flex gap-40 p-4 mx-auto justify-center border-b">
            <NavLink className={({isActive}) =>
                isActive ? 'border-b border-gray-600' : ''
            } 
            to='/'>Home</NavLink>
            <NavLink className={({isActive}) =>
                isActive ? 'border-b border-gray-600' : ''
            } to='/about'>About</NavLink>
        </nav>
        <Outlet/>
    </>
}