import ServicesDetails from "../Components/Sercices/ServicesDetails";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";

export const privateRoutes = [
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
    path: "/service/:id",
    name: "serviceDetails",
    Component: ServicesDetails,
  },
];
