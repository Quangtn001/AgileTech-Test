import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Profile = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-[1920px]  flex gap-[120px]">
        <div className="h-screen w-[320px] bg-[#D9D9D9] hidden lg:block">
          <Link to="/">
            <img src={logo} alt="" className=" pt-[30px] px-[100px]" />
          </Link>
          <div className="flex flex-col gap-[10px] mt-[30px]">
            <Link
              className="text-[20px] leading-8 font-normal text-heading ml-[34px]"
              to="#"
            >
              Posts
            </Link>
            <Link
              className="text-[20px] leading-8 font-normal text-heading ml-[34px]"
              to="#"
            >
              Logout
            </Link>
          </div>
        </div>
        <div className="mt-[120px] w-[1600px]">
          <div className="flex items-center flex-col gap-10 lg:flex-row justify-between">
            <Link
              to="#"
              className="px-[90px] py-[15px] text-white font-bold text-base bg-bg_color rounded-[50px]"
            >
              Add new
            </Link>
            <div className="pr-[124px] flex items-center justify-center gap-[43px] ">
              <input
                className="w-[368px] h-[50px] border placeholder:px-[34px]"
                type="text"
                name=""
                id=""
                placeholder="Title"
              />
              <div className="relative">
                <input
                  className="w-[368px] h-[50px] border placeholder:px-[34px] "
                  type="text"
                  name=""
                  id=""
                  placeholder="Tags"
                />
                <div className="absolute right-3 top-3">
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col pr-[124px] mt-5">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full  border ">
                    <thead className="border-b">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3  text-[20px] text-center font-normal text-black  border-r"
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-[20px] text-center font-normal text-black  border-r"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-[20px] text-center font-normal text-black  border-r"
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 ext-[20px] text-center font-normal text-black  border-r"
                        >
                          Tags
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-[20px] text-center font-normal text-black  border-r"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className=" ">
                      <tr className=" ">
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center font-normal text-black  border-r border-t">
                          1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black border-r  border-t">
                          ABC
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black  border-r border-t">
                          Description
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black  border-r border-t">
                          HTML, CSS
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-[20px] text-center font-normal border-t">
                          <div className="flex items-center justify-center gap-[49px]">
                            <a to="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                id="IconChangeColor"
                                height="24"
                                width="24"
                              >
                                <rect
                                  width="256"
                                  height="256"
                                  fill="none"
                                ></rect>
                                <path
                                  d="M224,56a8,8,0,0,1-8,8h-8V208a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,56ZM88,32h80a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16Z"
                                  id="mainIconPathAttribute"
                                ></path>
                              </svg>
                            </a>
                            <a to="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-pencil"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                <path
                                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                  id="mainIconPathAttribute"
                                ></path>{" "}
                              </svg>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className=" ">
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center font-normal text-black  border-r border-t">
                          2
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black border-r  border-t">
                          ABC
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black  border-r border-t">
                          Description
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black  border-r border-t">
                          HTML, CSS
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-[20px] text-center font-normal border-t">
                          <div className="flex items-center justify-center gap-[49px]">
                            <Link to="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                id="IconChangeColor"
                                height="24"
                                width="24"
                              >
                                <rect
                                  width="256"
                                  height="256"
                                  fill="none"
                                ></rect>
                                <path
                                  d="M224,56a8,8,0,0,1-8,8h-8V208a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,56ZM88,32h80a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16Z"
                                  id="mainIconPathAttribute"
                                ></path>
                              </svg>
                            </Link>
                            <Link to="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-pencil"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                <path
                                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                  id="mainIconPathAttribute"
                                ></path>{" "}
                              </svg>
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr className=" ">
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center font-normal text-black  border-r border-t">
                          3
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black border-r  border-t">
                          ABC
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black  border-r border-t">
                          Description
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black  border-r border-t">
                          HTML, CSS
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-[20px] text-center font-normal border-t">
                          <div className="flex items-center justify-center gap-[49px]">
                            <a to="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                id="IconChangeColor"
                                height="24"
                                width="24"
                              >
                                <rect
                                  width="256"
                                  height="256"
                                  fill="none"
                                ></rect>
                                <path
                                  d="M224,56a8,8,0,0,1-8,8h-8V208a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,56ZM88,32h80a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16Z"
                                  id="mainIconPathAttribute"
                                ></path>
                              </svg>
                            </a>
                            <Link to="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-pencil"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                <path
                                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                  id="mainIconPathAttribute"
                                ></path>{" "}
                              </svg>
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr className=" ">
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center font-normal text-black  border-r border-t">
                          4
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black border-r  border-t">
                          ABC
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black  border-r border-t">
                          Description
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black  border-r border-t">
                          HTML, CSS
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-[20px] text-center font-normal border-t">
                          <div className="flex items-center justify-center gap-[49px]">
                            <Link to="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                id="IconChangeColor"
                                height="24"
                                width="24"
                              >
                                <rect
                                  width="256"
                                  height="256"
                                  fill="none"
                                ></rect>
                                <path
                                  d="M224,56a8,8,0,0,1-8,8h-8V208a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,56ZM88,32h80a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16Z"
                                  id="mainIconPathAttribute"
                                ></path>
                              </svg>
                            </Link>
                            <Link to="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-pencil"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                <path
                                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                  id="mainIconPathAttribute"
                                ></path>{" "}
                              </svg>
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr className=" ">
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center font-normal text-black  border-r border-t">
                          5
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black border-r  border-t">
                          ABC
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black  border-r border-t">
                          Description
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black  border-r border-t">
                          HTML, CSS
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-[20px] text-center font-normal border-t">
                          <div className="flex items-center justify-center gap-[49px]">
                            <Link to="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                id="IconChangeColor"
                                height="24"
                                width="24"
                              >
                                <rect
                                  width="256"
                                  height="256"
                                  fill="none"
                                ></rect>
                                <path
                                  d="M224,56a8,8,0,0,1-8,8h-8V208a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,56ZM88,32h80a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16Z"
                                  id="mainIconPathAttribute"
                                ></path>
                              </svg>
                            </Link>
                            <Link to="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-pencil"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                <path
                                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                  id="mainIconPathAttribute"
                                ></path>{" "}
                              </svg>
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr className=" ">
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center font-normal text-black  border-r border-t">
                          6
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black border-r  border-t">
                          ABC
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black  border-r border-t">
                          Description
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black  border-r border-t">
                          HTML, CSS
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-[20px] text-center font-normal border-t">
                          <div className="flex items-center justify-center gap-[49px]">
                            <Link to="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                id="IconChangeColor"
                                height="24"
                                width="24"
                              >
                                <rect
                                  width="256"
                                  height="256"
                                  fill="none"
                                ></rect>
                                <path
                                  d="M224,56a8,8,0,0,1-8,8h-8V208a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,56ZM88,32h80a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16Z"
                                  id="mainIconPathAttribute"
                                ></path>
                              </svg>
                            </Link>
                            <Link to="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-pencil"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                <path
                                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                  id="mainIconPathAttribute"
                                ></path>{" "}
                              </svg>
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr className=" ">
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center font-normal text-black  border-r border-t">
                          7
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black border-r  border-t">
                          ABC
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black  border-r border-t">
                          Description
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black  border-r border-t">
                          HTML, CSS
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-[20px] text-center font-normal border-t">
                          <div className="flex items-center justify-center gap-[49px]">
                            <Link to="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                id="IconChangeColor"
                                height="24"
                                width="24"
                              >
                                <rect
                                  width="256"
                                  height="256"
                                  fill="none"
                                ></rect>
                                <path
                                  d="M224,56a8,8,0,0,1-8,8h-8V208a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,56ZM88,32h80a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16Z"
                                  id="mainIconPathAttribute"
                                ></path>
                              </svg>
                            </Link>
                            <Link to="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-pencil"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                <path
                                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                  id="mainIconPathAttribute"
                                ></path>{" "}
                              </svg>
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr className=" ">
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center font-normal text-black  border-r border-t">
                          8
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black border-r  border-t">
                          ABC
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black  border-r border-t">
                          Description
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black  border-r border-t">
                          HTML, CSS
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-[20px] text-center font-normal border-t">
                          <div className="flex items-center justify-center gap-[49px]">
                            <Link to="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                id="IconChangeColor"
                                height="24"
                                width="24"
                              >
                                <rect
                                  width="256"
                                  height="256"
                                  fill="none"
                                ></rect>
                                <path
                                  d="M224,56a8,8,0,0,1-8,8h-8V208a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,56ZM88,32h80a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16Z"
                                  id="mainIconPathAttribute"
                                ></path>
                              </svg>
                            </Link>
                            <Link to="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-pencil"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                <path
                                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                  id="mainIconPathAttribute"
                                ></path>{" "}
                              </svg>
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr className=" ">
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center font-normal text-black  border-r border-t">
                          9
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black border-r  border-t">
                          ABC
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black  border-r border-t">
                          Description
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black  border-r border-t">
                          HTML, CSS
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-[20px] text-center font-normal border-t">
                          <div className="flex items-center justify-center gap-[49px]">
                            <Link to="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                id="IconChangeColor"
                                height="24"
                                width="24"
                              >
                                <rect
                                  width="256"
                                  height="256"
                                  fill="none"
                                ></rect>
                                <path
                                  d="M224,56a8,8,0,0,1-8,8h-8V208a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,56ZM88,32h80a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16Z"
                                  id="mainIconPathAttribute"
                                ></path>
                              </svg>
                            </Link>
                            <Link to="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-pencil"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                <path
                                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                  id="mainIconPathAttribute"
                                ></path>{" "}
                              </svg>
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr className=" ">
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center font-normal text-black  border-r border-t">
                          10
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black border-r  border-t">
                          ABC
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black  border-r border-t">
                          Description
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[20px] text-center text-normal text-black  border-r border-t">
                          HTML, CSS
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-[20px] text-center font-normal border-t">
                          <div className="flex items-center justify-center gap-[49px]">
                            <Link to="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                id="IconChangeColor"
                                height="24"
                                width="24"
                              >
                                <rect
                                  width="256"
                                  height="256"
                                  fill="none"
                                ></rect>
                                <path
                                  d="M224,56a8,8,0,0,1-8,8h-8V208a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,56ZM88,32h80a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16Z"
                                  id="mainIconPathAttribute"
                                ></path>
                              </svg>
                            </Link>
                            <Link to="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-pencil"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                <path
                                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                  id="mainIconPathAttribute"
                                ></path>{" "}
                              </svg>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
