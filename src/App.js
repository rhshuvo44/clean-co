import { Route, Routes } from "react-router-dom";
import "./App.css";
import RequiredAdmin from "./Components/authentication/RequiredAdmin";
import RequredAuth from "./Components/authentication/RequredAuth";
import NabvBar from "./Components/Shared/NabvBar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { dashboardRoutes } from "./Rotues/dashboardRoutes";
import { dashboardUserRoutes } from "./Rotues/dashboardUserRoutes";
import { privateRoutes } from "./Rotues/privateRoutes";
import { publicRoutes } from "./Rotues/publicRoutes";

function App() {
  return (
    <>
      <NabvBar>
        <Routes>
          {/* Public Routes  */}
          {publicRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          {/* private routes  */}
          <Route element={<RequredAuth />}>
            {privateRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}

            {/* dashboard  */}
            {/* user  */}
            <Route path="/dashboard" element={<Dashboard />}>
              {dashboardUserRoutes.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />} />
              ))}
            </Route>
            {/* admin  */}
            <Route element={<RequiredAdmin />}>
              <Route path="/dashboard" element={<Dashboard />}>
                {dashboardRoutes.map(({ path, Component }, index) => (
                  <Route key={index} path={path} element={<Component />} />
                ))}
              </Route>
            </Route>
          </Route>
        </Routes>
      </NabvBar>
    </>
  );
}

export default App;
