import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../components/AboutMe/AboutMe";

import Main from "../layout/Main";
import Home from './../components/Homepage/Home';
import AllProjects from './../components/AllProjects/AllProjects';
import Blog from "../components/Blog/Blog";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[

            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<AboutMe></AboutMe>
            },
            {
                path:'/allproject',
                element:<AllProjects></AllProjects>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            
        ]
    }
])