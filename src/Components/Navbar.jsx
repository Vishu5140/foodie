import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Desktop-only links
  const links = [
    { id: 1, name: "About", path: "/about" },
    { id: 2, name: "Overview", path: "/overview" },
    { id: 3, name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-14 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-xl font-bold text-orange-500">
          Foodies
        </h1>

        {/* DESKTOP NAV (ONLY 3 LINKS) */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition pb-1
                  ${
                    isActive
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setMenuOpen(false);
          }}
          className="md:hidden text-gray-700 text-2xl"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE / TABLET MENU */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4">

          {/* COMMON LINKS */}
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-gray-700 hover:text-orange-500"
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          {/* MENU WITH SUBMENU */}
          <li>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-full flex justify-between items-center text-sm font-medium text-gray-700 hover:text-orange-500"
            >
              Menu
              <span className="text-lg">{menuOpen ? "−" : "+"}</span>
            </button>

            {menuOpen && (
              <ul className="mt-2 ml-4 flex flex-col gap-2">
                <NavLink
                  to="/menu/veg"
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-gray-600 hover:text-orange-500"
                >
                  🥦 Veg Only
                </NavLink>

                <NavLink
                  to="/menu/nonveg"
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-gray-600 hover:text-orange-500"
                >
                  🍗 Non-Veg
                </NavLink>
              </ul>
            )}
          </li>

          {/* MOBILE ONLY LINKS */}
          <li>
            <NavLink
              to="/favourite"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-orange-500"
            >
              ❤️ Favourite
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/cartlist"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-orange-500"
            >
              🛒 Cart
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-orange-500"
            >
              👤 Profile
            </NavLink>
          </li>

           <li>
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-orange-500"
            >
              🏷️ Exit
            </NavLink>
          </li>

        </ul>
      )}
    </nav>
  );
};

export default Navbar;
