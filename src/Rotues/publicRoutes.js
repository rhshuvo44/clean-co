import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";

export const publicRoutes = [
  {
    path: "/",
    name: "home",
    Component: Home,
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
  {
    path: "/register",
    name: "register",
    Component: Register,
  },
];
