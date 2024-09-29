import Home from "../routes/Home";
import NotFound404 from "../routes/NotFound404";
import Root from "../routes/Root";
import ThemeContextProvider from "./ThemeProvider";

import { HeaderLinks } from "../constants/HeaderData";
import { PROJECT_LIST } from "../constants/AppData";

import SectionWrapper from "../components/Wrappers/SectionWrapper";
import Project from "../components/Project/Project";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound404 />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            ...HeaderLinks.map((link) => {
                if (link.name === "Projects") {
                    return {
                        path: link.path,
                        element: (
                            <SectionWrapper display={link.display} sectionName={link.name}>
                                {link.element}
                            </SectionWrapper>
                        ),
                        children: [
                            {
                                index: true,
                                element: (
                                    <Navigate to={PROJECT_LIST[0].path} state={{ prevPath: "/projects/" }} replace />
                                ),
                            },
                            ...PROJECT_LIST.map((project) => ({
                                path: project.path,
                                element: <Project project={project} />,
                            })),
                        ],
                    };
                } else {
                    return {
                        path: link.path,
                        element: (
                            <SectionWrapper display={link.display} sectionName={link.name}>
                                {link.element}
                            </SectionWrapper>
                        ),
                    };
                }
            }),
        ],
    },
]);

const Providers = () => {
    return (
        <ThemeContextProvider>
            <RouterProvider router={router} />
        </ThemeContextProvider>
    );
};

export default Providers;
