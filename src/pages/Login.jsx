import { useState } from "react";
import logo from "../assets/logo.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://test-react.agiletech.vn/auth/login",
        {
          username,
        }
      );
      const { accessToken, refreshToken } = response.data;
      // Save tokens to local storage
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      // Redirect or perform any other action after successful login
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <section className="container mt-5 relative">
      <a href="/">
        <img src={logo} alt="" />
      </a>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-[64px] font-normal leading-[100px] text-center">
              Sign in
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleLogin}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Username..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-bg_color   font-normal rounded-lg text-sm px-5 py-2.5 text-center0a"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
