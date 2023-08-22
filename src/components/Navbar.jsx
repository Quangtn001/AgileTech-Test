import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const handleLogout = () => {
    // Remove both tokens from local storage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.reload();
  };
  return (
    <div className="mt-5 flex justify-between items-center">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="hidden md:flex items-center gap-4">
        {/* Render "Sign In" only if tokens are not present */}
        {!accessToken && !refreshToken && (
          <Link
            to="/sign-in"
            className="py-[16px] px-[60px] bg-purple-500 rounded-[50px] text-white"
          >
            Sign In
          </Link>
        )}

        {/* Render "Profile" and "Logout" if tokens are present */}
        {(accessToken || refreshToken) && (
          <>
            <Link
              to="/profile"
              className="py-[16px] px-[60px] bg-purple-500 rounded-[50px] text-white"
            >
              Profile
            </Link>
            <Link
              className="py-[16px] px-[60px] bg-purple-500 rounded-[50px] text-white"
              onClick={handleLogout}
            >
              Logout
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
