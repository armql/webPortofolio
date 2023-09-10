import { Navigate, createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import EntryCard from "./views/EntryCard";
import Contact from "./views/Contact";
import Projects from "./views/Projects";
import AboutMe from "./views/AboutMe";
import Resume from "./views/Resume";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="home" />
            },
            {
                path: 'home',
                element: <EntryCard />
            },
            {
                path: 'about',
                element: <AboutMe />
            },
            {
                path: 'projects',
                element: <Projects />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'resume',
                element: <Resume />
            }
        ]
    }
])

export default router;