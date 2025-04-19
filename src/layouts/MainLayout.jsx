import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import {
  FaUsers,
  FaLightbulb,
  FaChartLine,
  FaSignOutAlt,
} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import styles from "./mainLayout.module.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

const MainLayout = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const menuItems = [
    { label: "Dashboard", to: "/dashboard", icon: <MdDashboard /> },
    { label: "Customers", to: "/customers", icon: <FaUsers /> },
    { label: "Suggestions", to: "/suggestions", icon: <FaLightbulb /> },
    { label: "Reports", to: "/reports", icon: <FaChartLine /> },
    { label: "Settings", to: "/settings", icon: <FiSettings /> },
    { label: "Logout", action: "logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <img alt="logo" src={logo} />
          <h2 className={styles.brandTitle}>
            <span className={styles.brandClient}>Client</span>
            <span className={styles.brandPulse}>Pulse</span>
          </h2>
        </div>
        <div className={styles.userInfo}>
          {user?.avatar && (
            <img src={user.avatar} alt={user.name} className={styles.avatar} />
          )}
          <div>
            <p className={styles.userName}>{user?.name || "Guest"}</p>
            <p className={styles.userRole}>{user?.role || ""}</p>
          </div>
        </div>
        <nav className={styles.nav}>
          {menuItems.map(({ label, to, icon, action }) =>
            action === "logout" ? (
              <div
                key={label}
                className={styles.navItem}
                onClick={handleLogout}
              >
                <span className={styles.icon}>{icon}</span>
                <span className={styles.label}>{label}</span>
              </div>
            ) : (
              <NavLink
                to={to}
                key={label}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navItem} ${styles.active}`
                    : styles.navItem
                }
              >
                <span className={styles.icon}>{icon}</span>
                <span className={styles.label}>{label}</span>
              </NavLink>
            )
          )}
        </nav>
      </aside>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;