
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged Out Successfully");
    navigate("/login");
  };

  return (
    <nav className="bg-[#06152f] text-white px-6 md:px-10 py-4 flex justify-between items-center relative">

     {/* Logo */}
<div className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="VoltPath Logo"
    className="w-10 h-10 md:w-12 md:h-12 object-contain"
  />

  <div>
    <h1 className="text-3xl font-bold text-green-400">
      VoltPath
    </h1>

    <p className="text-xs text-gray-400">
      Powering the Future
    </p>
  </div>
</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-medium items-center">

        <li>
          <Link
            to="/"
            className="hover:text-green-400 transition"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/find-stations"
            className="hover:text-green-400 transition"
          >
            Find Stations
          </Link>
        </li>

        <li>
          <Link
            to="/dashboard"
            className="hover:text-green-400 transition"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/how-it-works"
            className="hover:text-green-400 transition"
          >
            How It Works
          </Link>
        </li>

        <li>
          <Link
            to="/pricing"
            className="hover:text-green-400 transition"
          >
            Pricing
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="hover:text-green-400 transition"
          >
            About Us
          </Link>
        </li>

      </ul>

      {/* Login/Register/Logout */}
      <div className="hidden md:flex gap-3">

        {token ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="border border-white px-5 py-2 rounded-lg hover:border-green-400"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-green-500 px-5 py-2 rounded-lg hover:bg-green-600"
            >
              Register
            </Link>
          </>
        )}

      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#06152f] p-6 md:hidden z-50">

          <ul className="flex flex-col gap-5 text-center">

            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/find-stations"
                onClick={() => setMenuOpen(false)}
              >
                Find Stations
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/how-it-works"
                onClick={() => setMenuOpen(false)}
              >
                How It Works
              </Link>
            </li>

            <li>
              <Link
                to="/pricing"
                onClick={() => setMenuOpen(false)}
              >
                Pricing
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
            </li>

            {token ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-5 py-2 rounded-lg w-full"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </Link>
                </li>

                <li>
                  <Link
                    to="/register"
                    onClick={() => setMenuOpen(false)}
                  >
                    Register
                  </Link>
                </li>
              </>
            )}

          </ul>

        </div>
      )}
    </nav>
  );
}

export default Navbar;