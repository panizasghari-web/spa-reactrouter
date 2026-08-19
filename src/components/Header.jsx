import { Link, NavLink } from "react-router";

function Header() {
  return (
    <>
      <header className="w-full h-20 bg-gray-300/50 pl-20 pt-3 flex-col md:flex-row flex justify-center md:justify-start md:items-center  overflow-x-hidden">
        <Link to="/" className="font-extrabold text-[14px] md:text-2xl text-indigo-800">
          SinglePageApplication
        </Link>
        <ul className="w-[50%] md:w-[30%] md:pl-10 h-full text-[15px] md:text-[20px] flex items-center justify-between">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-500 hover:text-indigo-800 transition-all duration-100 ease-linear"
                  : "text-gray-500 hover:text-gray-800 transition-all duration-100 ease-linear"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-500 hover:text-indigo-800 transition-all duration-100 ease-linear"
                  : "text-gray-500 hover:text-gray-800 transition-all duration-100 ease-linear"
              }
            >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-500 hover:text-indigo-800 transition-all duration-100 ease-linear"
                  : "text-gray-500 hover:text-gray-800 transition-all duration-100 ease-linear"
              }
            >
              Users
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
