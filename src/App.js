import { Route, Routes } from "react-router-dom";
import "./App.css";
import NabvBar from "./Components/Shared/NabvBar";
import { publicRoutes } from "./Rotues/publicRoutes";

function App() {
  return (
    <>
      <NabvBar>
        <Routes>
          {publicRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Routes>
      </NabvBar>
    </>
  );
}

export default App;
