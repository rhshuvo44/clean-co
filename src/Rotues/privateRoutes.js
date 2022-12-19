import ServiceOrder from "../Components/Sercices/ServiceOrder";
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
    path: "/serviceDetail/:id",
    name: "serviceDetails",
    Component: ServicesDetails,
  },
  {
    path: "/serviceOrder/:id",
    name: "serviceOrder",
    Component: ServiceOrder,
  },
];
