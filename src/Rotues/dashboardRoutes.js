import AddAdmin from "../Pages/Dashboard/AddAdmin";
import AddServices from "../Pages/Dashboard/AddServices";

export const dashboardRoutes = [
  {
    path: "addServices",
    name: "addServices",
    Component: AddServices,
  },
  {
    path: "addAdmin",
    name: "addAdmin",
    Component: AddAdmin,
  },
];
