import { useState } from "react";
import DashboardSidebar from "../../components/DashboardSidebar";
import Header from "../../components/Header";
import { sidebarList } from "../../data/AdminDashboard";

import tableGirl from "../../assets/images/table-girl.png";
import filter from "../../assets/images/Filter 1.png";
import previous from "../../assets/images/icon-previous.svg";
import next from "../../assets/images/icon-next.svg";
import { FiArrowLeft } from "react-icons/fi";
import { AiOutlineCaretDown, AiOutlineCloudDownload } from "react-icons/ai";
import girl from "../../assets/images/table-girl.png";

const AdminUsers = () => {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [showSupportDetails, setShowSupportDetails] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const caseTableHeader = ["case", "date", "status", "action"];
  const tableHeader = ["Name", "Phone", "Email", "Action"];
  const requestStatus = ["pending", "completed", "Inconclusive"];

  const tableData = [
    {
      imgUrl: tableGirl,
      name: "John Doe",
      phone: "09012345678",
      email: "Bipasu@gmail.com",
    },
    {
      imgUrl: tableGirl,
      name: "Wonder Woman",
      phone: "09012345678",
      email: "wonder@woman.com",
    },
    {
      imgUrl: tableGirl,
      name: "Bruce Wayne",
      phone: "09012345678",
      email: "bruce@wayne.com",
    },
    {
      imgUrl: tableGirl,
      name: "John Doe",
      phone: "09012345678",
      email: "john@doe.com",
    },
  ];
  const caseTableBody = [
    {
      case: "elkirk College has eight campuses and learning centres across the West Kootenay and Kootenay Boundary regions:",
      date: "20/12/2020",
      status: "pending",
    },
    {
      case: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis sunt a deserunt reprehenderit, totam magni quisquam ipsum nemo beatae, accusamus nam nulla ab accusantium soluta eos tenetur modi. Ad, inventore?",
      date: "20/12/2020",
      status: "completed",
    },
  ];

  const resolvedCases = [
    "elkirk College has eight campuses and learning centres across the West Kootenay and Kootenay Boundary regions:",
  ];

  const handleShowUserDetails = () => {
    setShowUserDetails(!showUserDetails);
  };

  const handleShowSuppportDetails = () => {
    setShowSupportDetails(!showSupportDetails);
  };

  const handleShowStatus = () => setShowStatus(!showStatus);

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] overflow-y-auto">
      <Header dashboard />
      <div className="flex-1 flex">
        <DashboardSidebar sidebarList={sidebarList} />
        <main className="w-full lg:w-4/5 bg-[#fff] h-full pt-8 px-10 ">
          {!showUserDetails ? (
            <div className="h-full flex flex-col">
              <div className="mt-8 flex items-center justify-between pb-5 border-b">
                <p className="text-xl font-semibold">Farcry Users</p>
                <div className="flex items-center gap-2">
                  <select
                    className="border outline-none rounded px-5 py-1.5 text-sm"
                    name="filter"
                    id="filter"
                  >
                    <option value="april 2022">April 2022</option>
                    <option value="may 2022">May 2022</option>
                    <option value="june 2022">June 2022</option>
                  </select>
                  <img src={filter} alt="fiter" />
                </div>
              </div>
              <div className="mt-2 pb-5 max-w-3xl">
                <table className="w-full">
                  <thead>
                    <tr>
                      {tableHeader.map((item, idx) => (
                        <th className="capitalize text-left" key={idx}>
                          {item}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item, idx) => (
                      <tr key={idx} className="text-sm">
                        <td className="pt-4">
                          <div className="flex items-center gap-2">
                            <img
                              className="rounded-full w-7"
                              src={item.imgUrl}
                              alt="user"
                            />
                            <p className="font-semibold">{item.name}</p>
                          </div>
                        </td>
                        <td className="pt-4">{item.phone}</td>
                        <td className="pt-4">{item.email}</td>
                        <td className="pt-4">
                          <button
                            onClick={() => handleShowUserDetails()}
                            className="text-xs  rounded px-5 py-1.5 text-white capitalize font-semibold w-fit bg-blue-500"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-between pt-4 mt-auto mb-3 border-t">
                <p className="text-sm">
                  Showing <span className="font-semibold">1</span> to{" "}
                  <span className="font-semibold"> 10 </span> of{" "}
                  <span className="font-semibold"> 50 </span>
                  Entries
                </p>
                <div className="flex items-center gap-3 text-xs">
                  <img
                    role={"button"}
                    className="w-2.5"
                    src={previous}
                    alt="previous"
                  />
                  <p className="text-white rounded px-2 py-1 bg-blue-500">1</p>
                  <p className="text-white rounded px-2 py-1 bg-blue-500">2</p>
                  <p className="text-white rounded px-2 py-1 bg-blue-500">3</p>
                  <img
                    role={"button"}
                    className="w-2.5"
                    src={next}
                    alt="next"
                  />
                </div>
              </div>
            </div>
          ) : (
            <>
              {!showSupportDetails ? (
                <div className="flex flex-col">
                  <div className="border-b">
                    <button
                      onClick={handleShowUserDetails}
                      className="flex items-center gap-2 py-3 px-2"
                    >
                      <FiArrowLeft />
                      <span>Back</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-[4fr,6fr] gap-10 mt-14">
                    <div className="shadow rounded p-5 flex gap-4">
                      <div className="flex flex-col lg:items-center">
                        <div className="w-20 h-20 rounded-full">
                          <img
                            className="rounded-full w-full object-cover"
                            src={girl}
                            alt="suleiman"
                          />
                        </div>
                        {/* <p className="ml-5 sm:ml-[unset] text-primaryBlue font-medium underline cursor-pointer">
                      change photo
                    </p> */}
                      </div>
                      <div className="flex flex-col gap-2 text-sm">
                        <div className=" flex items-center gap-2">
                          <p className="text-xl font-semibold opacity-70 whitespace-nowrap">
                            Bipasha Basu
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="font-semibold opacity-70 text-base whitespace-nowrap">
                            Sex :
                          </p>
                          <p>Female</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="font-semibold opacity-70 text-base whitespace-nowrap">
                            Age :
                          </p>
                          <p>30</p>
                        </div>
                        <p>suleiman.khan@schalarshipiq.com</p>
                        <div className="flex items-center gap-3">
                          <p className="font-semibold opacity-70 text-base whitespace-nowrap">
                            Occupation :
                          </p>
                          <p>Salesperson</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="font-semibold opacity-70 text-base whitespace-nowrap">
                            Phone :
                          </p>
                          <p>090300736532</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="font-semibold opacity-70 text-base whitespace-nowrap">
                            Marital Status :
                          </p>
                          <p>Single</p>
                        </div>
                        <div className="flex items-start sm:items-center gap-3">
                          <p className="font-semibold opacity-70 text-lg whitespace-nowrap">
                            State :
                          </p>
                          <p className="mt-1.5">Abuja </p>
                        </div>
                        {/* <button className="ml-[unset] px-14 mt-10 py-3 rounded bg-primaryBlue text-white w-fit">
                          Assign
                        </button> */}
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="font-bold">
                          Submitted Case <span>(2)</span>
                        </p>
                        <div className="mt-5">
                          <table className="w-full">
                            <thead>
                              <tr>
                                {caseTableHeader.map((item, idx) => (
                                  <th
                                    className="capitalize text-left"
                                    key={idx}
                                  >
                                    {item}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {caseTableBody.map((item, idx) => (
                                <tr key={idx} className="text-sm">
                                  <td className="pt-4">
                                    {item.case.substring(0, 20)}
                                  </td>
                                  <td className="pt-4">{item.date}</td>
                                  <td className="pt-4 pr-3">
                                    <button
                                      onClick={() => handleShowUserDetails()}
                                      className="text-xs w-full rounded px-5 py-1.5 text-white capitalize font-semibold bg-blue-500"
                                    >
                                      {item.status}
                                    </button>
                                  </td>
                                  <td className="pt-4 ">
                                    <div className="flex items-center gap-2">
                                      <button
                                        onClick={() => {}}
                                        className="text-xs  rounded px-5 py-1.5 text-white capitalize font-semibold w-fit bg-[coral]"
                                      >
                                        Assign
                                      </button>
                                      <button
                                        onClick={() =>
                                          handleShowSuppportDetails()
                                        }
                                        className="text-xs  rounded px-5 py-1.5 text-white capitalize font-semibold w-fit bg-blue-500"
                                      >
                                        View
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="mt-10">
                        <p className="font-bold">Resolved Cases</p>
                        <div className="mt-3">
                          {resolvedCases.map((item, idx) => (
                            <div
                              key={idx}
                              className="text-sm grid grid-cols-[.7fr,.3fr] gap-3"
                            >
                              <p className="">{item}</p>
                              <button className="px-4 py-2 h-fit w-fit text-white bg-primaryBlue rounded">
                                View details
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col">
                  <div className="border-b pb-3 flex items-center justify-between">
                    <button
                      onClick={handleShowSuppportDetails}
                      className="flex items-center gap-2 py-3 px-2"
                    >
                      <FiArrowLeft />
                      <span className="text-base opacity-90 font-semibold">
                        /Bipasha/Request details
                      </span>
                    </button>
                    <button
                      onClick={handleShowStatus}
                      className="relative flex items-center gap-2 bg-blue-500 px-4 py-2 rounded text-white text-xs"
                    >
                      Change Request Status <AiOutlineCaretDown />{" "}
                      {showStatus && (
                        <div className="overflow-hidden w-full bg-blue-500 z-10 absolute top-10 left-0 rounded grid">
                          {requestStatus.map((status, idx) => (
                            <p
                              className="px-5 py-2.5 hover:bg-blue-700 text-left capitalize"
                              key={idx}
                            >
                              {status}
                            </p>
                          ))}
                        </div>
                      )}
                    </button>
                  </div>
                  <div className="max-w-3xl">
                    <div className="mt-7 flex items-center justify-between">
                      <p className="text-lg font-semibold">
                        Showing information for suppor request
                      </p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => {}}
                          className="text-xs w-full rounded px-5 py-1.5 text-white capitalize font-semibold bg-[coral]"
                        >
                          Pending
                        </button>{" "}
                        <button
                          onClick={() => {}}
                          className="text-xs w-full rounded px-5 py-1.5 text-white capitalize font-semibold bg-blue-500"
                        >
                          Assign
                        </button>
                      </div>
                    </div>
                    <div className="grid gap-10 grid-cols-[.8fr,.2fr] shadow p-5 rounded mt-5 items-start">
                      <div>
                        <p className="font-semibold mb-2">About Request</p>
                        <p className="text-sm">
                          elkirk College has eight campuses and learning centres
                          across the West Kootenay and Kootenay Boundary
                          regions: elkirk College has eight campuses and
                          learning centres across the West Kootenay and Kootenay
                          Boundary regions:
                        </p>
                        <div className="mt-7">
                          <p className="font-semibold mb-2">Assigned Body</p>
                          <p>Majinte human rights law firm</p>
                        </div>
                        <div className="mt-10">
                          <p className="font-semibold mb-2">
                            Attached Documents
                          </p>
                          <button className="flex items-center gap-2 px-5 py-2 text-sm border border-current rounded text-primaryBlue">
                            <AiOutlineCloudDownload size={22} />
                            Download Attachement
                          </button>
                        </div>
                      </div>
                      <p className="mt-7 text-sm font-semibold">20/07/2023</p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AdminUsers;
