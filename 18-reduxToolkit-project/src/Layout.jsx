// Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#070b14] text-white">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;