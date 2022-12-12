import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSideBar from "../../Components/Dashboard/DashboardSideBar";

const Dashboard = () => {
  return (
    <div>
      <DashboardSideBar>
        <Outlet />
      </DashboardSideBar>
    </div>
  );
};

export default Dashboard;
