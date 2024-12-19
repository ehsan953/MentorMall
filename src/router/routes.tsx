import Layout from "@/components/layout";
import Counter from "@/pages/Counter";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Membership from "@/pages/Membership";
import Testimonial from "@/pages/Testimonial";
import Courses from "@/pages/Courses";
import Store from "@/pages/Store";
import Home from "@/pages/Home";
import Programs from "@/pages/Programs"
import { createBrowserRouter as Router } from "react-router-dom";

export const routes = Router([
  {
    path: "*",
    element: <div>Page not found</div>,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/membership",
        element: <Membership />,
      },
      {
        path: "/testimonial",
        element: <Testimonial />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/programs",
        element: <Programs />,
      },
    ],
  },
]);
