import { useState } from "react";
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

  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="mt-5 flex justify-between items-center">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="hidden lg:flex items-center gap-4">
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
      <div
        className="block lg:hidden overflow-hidden"
        onClick={() => setIsMobile(true)}
      >
        <svg
          fill="none"
          height={30}
          viewBox="0 0 20 20"
          width={30}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M3 5C3 4.44772 3.44772 4 4 4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H4C3.44772 6 3 5.55228 3 5Z"
            fill="#4A5568"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="M3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10Z"
            fill="#4A5568"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="M3 15C3 14.4477 3.44772 14 4 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H4C3.44772 16 3 15.5523 3 15Z"
            fill="#4A5568"
            fillRule="evenodd"
          />
        </svg>
      </div>
      {/* Mobile menu */}
      <div
        className={
          isMobile
            ? "h-full w-[90%] bg-slate-100 fixed z-50 left-0 top-0 text-white lg:hidden p-5 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        {/* Render mobile menu items here */}
        <div className="flex item-start justify-between">
          <Link
            to="/"
            className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start mb-[67px]"
          >
            <img src={logo} alt="" />
            <p className="ml-2 text-xl font-bold text-heading ">
              DataWarehouse
            </p>
          </Link>
          <div
            className="absolute right-4 top-7"
            onClick={() => setIsMobile(false)}
          >
            <svg
              height="24px"
              id="Layer_1"
              style={{ enableBackground: "new 0 0 512 512" }}
              version="1.1"
              viewBox="0 0 512 512"
              width="24px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-4">
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
    </div>
  );
};

export default Navbar;
