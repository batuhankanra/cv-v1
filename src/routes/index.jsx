import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import AboutMe from "~/pages/about-me";
import Home from "~/pages/home";
import MyText from "~/pages/my-text";
import NotFound from "~/pages/not-found";
import Profile from "~/pages/profile";
import Projects from "~/pages/projects";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'project',
                element:<Projects />
            },
            {
                path:'profil',
                element:<Profile />
            },
            {
                path:'about-me',
                element:<AboutMe />
            },
            {
                path:'my-text',
                element:<MyText />
            },
            {
                path:'*',
                element:<NotFound />
            }
        ]
    },
    
])

export default routes