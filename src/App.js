import { Route, Routes } from "react-router-dom";
import "./App.css";
import RequredAuth from "./Components/authentication/RequredAuth";
import NabvBar from "./Components/Shared/NabvBar";
import Dashboard from "./Pages/Dashboard/Dashboard";
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
          </Route>
          {/* dashboard  */}
          <Route element={<RequredAuth />}>
            {/* {privateRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))} */}
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </NabvBar>
    </>
  );
}

export default App;
