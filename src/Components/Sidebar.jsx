import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const sidebarLinks = [
  {
    name: "Menu",
    emoji: "🍽️",
    children: [
      { name: "Veg Only", path: "/menu/veg" },
      { name: "Non-Veg", path: "/menu/nonveg" },
    ],
  },
  { name: "Favorites", path: "/favourite", emoji: "❤️" },
  { name: "Cart", path: "/cartlist", emoji: "🛒" },
  { name: "Profile", path: "/profile", emoji: "👤" },
    { name: "Exit", path: "/welcome", emoji: "🏷️" },


];

const Sidebar = () => {
  const location = useLocation();

  // Redux state
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const favCount = useSelector((state) => state.fav.favItems.length);

  // Menu toggle
  const [manualToggle, setManualToggle] = useState(false);

  const isMenuRoute = location.pathname.startsWith("/menu");
  const isMenuOpen = manualToggle || isMenuRoute;

  return (
    <aside className="h-screen w-64 bg-[#FFF7ED] shadow-lg fixed left-0 top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 text-2xl font-bold text-orange-600 border-b border-orange-200">
        Foodies 🍔
        <p className="text-sm font-normal text-orange-400">
          Good food, good mood
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarLinks.map((item) => (
          <div key={item.name}>
            {/* Menu Toggle */}
            {item.children ? (
              <div
                onClick={() => setManualToggle((prev) => !prev)}
                className="flex items-center gap-3 p-3 rounded-xl font-medium cursor-pointer
                text-gray-600 hover:bg-orange-50 hover:text-orange-500 transition-all"
              >
                <span className="text-xl">{item.emoji}</span>
                <span className="flex-1">{item.name}</span>
                <span
                  className={`text-sm transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                >
                  ▶
                </span>
              </div>
            ) : (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-xl font-medium transition-all
                  ${
                    isActive
                      ? "bg-orange-100 text-orange-600"
                      : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                  }`
                }
              >
                <span className="text-xl">{item.emoji}</span>
                <span className="flex-1">{item.name}</span>

                {/* Cart Badge */}
                {item.name === "Cart" && totalQuantity > 0 && (
                  <span className="ml-auto w-5 h-5 flex items-center justify-center bg-red-500 text-white rounded-full text-xs font-bold">
                    {totalQuantity}
                  </span>
                )}

                {/* Favorites Badge */}
                {item.name === "Favorites" && favCount > 0 && (
                  <span className="ml-auto w-5 h-5 flex items-center justify-center bg-pink-500 text-white rounded-full text-xs font-bold">
                    {favCount}
                  </span>
                )}
              </NavLink>
            )}

            {/* Sub Menu */}
            {item.children && (
              <div
                className={`ml-10 mt-1 space-y-1 overflow-hidden transition-all duration-300
                ${isMenuOpen ? "max-h-40" : "max-h-0"}`}
              >
                {item.children.map((child) => (
                  <NavLink
                    key={child.name}
                    to={child.path}
                    className={({ isActive }) =>
                      `block text-sm p-2 rounded-lg transition-colors
                      ${
                        isActive
                          ? "text-orange-600 bg-orange-100"
                          : "text-gray-600 hover:text-orange-500"
                      }`
                    }
                  >
                    {child.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 text-xs text-orange-400 text-center">
        © 2026 Foodies
      </div>
    </aside>
  );
};

export default Sidebar;
