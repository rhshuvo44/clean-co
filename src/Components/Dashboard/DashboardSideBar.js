import React from "react";
import { NavLink } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const DashboardSideBar = ({ children }) => {
  const [admin] = useAdmin();
  return (
    <div className="drawer drawer-mobile mt-16 bg-accent">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 gap-y-2 w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="" className="rounded-lg">
              {" "}
              Profile
            </NavLink>
          </li>
          {admin && (
            <li>
              <NavLink to="addServices" className="rounded-lg">
                {" "}
                Add Services
              </NavLink>
            </li>
          )}

          <li>
            <NavLink to="myServices" className="rounded-lg">
              {" "}
              My Services
            </NavLink>
          </li>
          {admin && (
            <li>
              <NavLink to="addAdmin" className="rounded-lg">
                {" "}
                Add Admin
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashboardSideBar;
