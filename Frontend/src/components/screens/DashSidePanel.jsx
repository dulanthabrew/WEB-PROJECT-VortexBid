import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LogOut from "../functions/LogOut";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faGavel,
  faBell,
  faTags,
  faMoneyBill,
  faUser,
  faSignOutAlt,
  faCartShopping,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const DashSidePanel = ({ setUser }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook to get the current URL path

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [unreadNotificationsCount, setUnreadNotificationsCount] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const dashLogout = () => {
    setUser(null);
    LogOut();
    navigate("/login");
  };

  const fetchUnreadNotificationsCount = async () => {
    try {
      const currentUser = JSON.parse(localStorage.getItem("user"));
      if (!currentUser) return;

      const response = await fetch(
        "http://localhost:5000/api/notifications/check",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: currentUser.id }),
        }
      );
      const data = await response.json();
      if (data.success) {
        setUnreadNotificationsCount(data.data);
      }
    } catch (error) {
      console.error("Error fetching unread notifications:", error);
    }
  };

  useEffect(() => {
    fetchUnreadNotificationsCount();
    const intervalId = setInterval(fetchUnreadNotificationsCount, 5000);
    return () => clearInterval(intervalId);
  }, []);

  // Helper to determine if a link is active
  const isActive = (path) => location.pathname === path;

  const navLinkClasses = (path) =>
    `flex items-center p-2 rounded-lg text-gray-200 hover:bg-slate-700 transition-colors duration-200 ${
      isActive(path) ? "bg-sky-600 font-semibold" : ""
    }`;

  return (
    <>
      {/* Menu Button for Mobile */}
      <button
        onClick={toggleSidebar}
        type="button"
        className="fixed top-4 left-4 z-50 inline-flex items-center p-2 text-sm rounded-lg sm:hidden bg-white shadow-md text-gray-800 border"
      >
        <span className="sr-only">Open sidebar</span>
        Menu
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-slate-800 text-white sm:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-4 py-4 overflow-y-auto">
          <motion.div
            className="text-2xl font-bold flex items-center space-x-2 text-white mb-6 p-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, ease: "easeOut" }}
          >
            <span className="text-sky-400">Vortex</span>
            <span>Bid</span>
          </motion.div>

          {/* Navigation Sections */}
          {[
            {
              title: "General",
              links: [
                { to: "/", icon: faHome, label: "Home" },
                { to: "/dashboard", icon: faChartSimple, label: "Dashboard" },
                { to: "/auctions", icon: faCartShopping, label: "Auctions" },
                {
                  to: "/notifications",
                  icon: faBell,
                  label: "Notifications",
                  count: unreadNotificationsCount,
                },
              ],
            },
            {
              title: "My Activities",
              links: [
                { to: "/myauctions", icon: faTags, label: "My Auctions" },
                { to: "/mybids", icon: faGavel, label: "My Bids" },
                { to: "/mypayments", icon: faMoneyBill, label: "My Payments" },
              ],
            },
            {
              title: "Account",
              links: [{ to: "/profile", icon: faUser, label: "Profile" }],
            },
          ].map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-4">
              <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2 px-2">
                {section.title}
              </h2>
              <ul className="space-y-1 font-medium">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.to}
                      onClick={toggleSidebar}
                      className={navLinkClasses(link.to)}
                    >
                      <FontAwesomeIcon
                        icon={link.icon}
                        className="w-5 h-5 mr-3"
                      />
                      <span>{link.label}</span>
                      {link.count > 0 && (
                        <span className="ml-auto bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                          {link.count}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Logout Button */}
          <div className="absolute bottom-4 left-4 right-4">
            <button
              onClick={dashLogout}
              className="flex items-center p-2 w-full rounded-lg text-gray-200 hover:bg-slate-700 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="w-5 h-5 mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashSidePanel;
