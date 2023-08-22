import logo from "../assets/logo.svg";
import iconFooter from "../assets/icon-footer.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      {/* component */}

      <footer className="w-full text-gray-70">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <Link
              to="/"
              className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start mb-[67px]"
            >
              <img src={logo} alt="" />
              <p className="ml-2 text-xl font-bold text-heading ">
                DataWarehouse
              </p>
            </Link>
            <p className=" text-base text-heading font-medium">
              Warehouse Society, 234 Bahagia Ave Street PRBW 29281
            </p>
            <p className="text-base text-heading font-normal">
              info@warehouse.project 1-232-3434 (Main)
            </p>
          </div>
          <div className="flex flex-wrap flex-grow justify-between mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-[30px] text-base font-bold tracking-widest text-heading capitalize">
                About
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <Link
                    to="#"
                    className="text-heading cursor-pointer hover:text-gray-900"
                  >
                    Profile
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    to="#"
                    className="text-heading cursor-pointer hover:text-gray-900"
                  >
                    Features
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    to="#"
                    className="text-heading cursor-pointer hover:text-gray-900"
                  >
                    Careers
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    to="#"
                    className="text-heading cursor-pointer hover:text-gray-900"
                  >
                    DW News
                  </Link>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className=" text-base font-bold tracking-widest text-gray-900 capitalize mb-[30px]">
                Help
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <Link
                    to="#"
                    className="text-heading font-normal  cursor-pointer hover:text-gray-900"
                  >
                    Support
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    to="#"
                    className="text-heading font-normal cursor-pointer hover:text-gray-900"
                  >
                    Sign up
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    to="#"
                    className="text-heading font-normal cursor-pointer hover:text-gray-900"
                  >
                    Guide
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    to="#"
                    className="text-heading font-normal cursor-pointer hover:text-gray-900"
                  >
                    Reports
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    to="#"
                    className="text-heading font-normal cursor-pointer hover:text-gray-900"
                  >
                    Q&A
                  </Link>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className=" text-base font-bold tracking-widest text-gray-900 capitalize mb-[30px]">
                Social Media
              </h2>
              <nav className="mb-10 list-none flex items-center gap-4 justify-center lg:justify-start">
                <li className="mt-3 w-[50px] h-[50px] rounded-full bg-gray-300">
                  <Link to="#" className="cursor-pointer  "></Link>
                </li>
                <li className="mt-3 w-[50px] h-[50px] rounded-full bg-gray-300">
                  <Link to="#" className=" cursor-pointer "></Link>
                </li>
                <li className="mt-3 w-[50px] h-[50px] rounded-full bg-gray-300">
                  <Link to="#" className=" cursor-pointer  "></Link>
                </li>
              </nav>
            </div>
          </div>
        </div>

        <div className="mb-5 flex flex-col lg:flex-row items-center justify-between">
          <p className="text-xs text-heading text-center lg:text-left capitalize max-w-[360px]">
            © Datawarehouse™, 2020. All rights reserved. Company Registration
            Number: 21479524.
          </p>
          <img src={iconFooter} alt="" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
