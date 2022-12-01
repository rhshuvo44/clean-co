import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";

export const publicRoutes = [
  {
    path: "/",
    name: "home",
    Component: Home,
  },
  {
    path: "/about",
    name: "about",
    Component: About,
  },
  {
    path: "/service",
    name: "service",
    Component: Services,
  },
  {
    path: "/contact",
    name: "contact",
    Component: Contact,
  },
  {
    path: "/login",
    name: "login",
    Component: Login,
  },
];
