import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../components/Navbar";

function NavbarLayout() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Sidebar → ONLY PC (lg and above) */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:ml-64">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="pt-20 px-8 bg-[#FFFDF8] min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default NavbarLayout;
