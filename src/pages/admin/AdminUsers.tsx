import { useEffect, useState } from "react";
import DashboardSidebar from "../../components/DashboardSidebar";
import Header from "../../components/Header";
import { sidebarList } from "../../data/AdminDashboard";

import filter from "../../assets/images/Filter 1.png";
import previous from "../../assets/images/icon-previous.svg";
import next from "../../assets/images/icon-next.svg";
import { FiArrowLeft } from "react-icons/fi";
import girl from "../../assets/images/table-girl.png";
import { toast } from "react-toastify";
import axios from "axios";
import { apiEndpoints, BASE_URL } from "../../config/Endpoints";
import empty from "../../assets/images/no-data.png";
import moment from "moment";

import { trim as trimText } from "../admin/AdminDashboard";
import SelectedSupport from "../../components/SelectedSupport";
import { ISupport, IUser } from "../../extra/types";

export interface IEmpty {
  content?: string;
}

const Empty = ({ content }: IEmpty) => (
  <div className="py-5 mt-3 flex flex-col justify-center text-center">
    <img className="mx-auto w-24" src={empty} alt="no data" />
    <p className="ml-8">{content ?? "No cases here."}</p>{" "}
  </div>
);

const AdminUsers = () => {
  const [partners, setPartners] = useState([]);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [showSupportDetails, setShowSupportDetails] = useState(false);
  const caseTableHeader = ["case", "date", "status", "action"];
  const tableHeader = ["Name", "Phone", "Email", "Action"];
  const [selectedUser, setSelectedUser] = useState({} as IUser);
  const [selectedSupport, setSelectedSupport] = useState({} as ISupport);
  const [userSupport, setUserSupport] = useState(
    {} as {
      analytics: { allCount: number; completedCount: number };
      supports: Array<ISupport>;
    }
  );

  const [pageIndex, setPageIndex] = useState(1);
  const itemCount = 5;

  const [allUsers, setAllUsers] = useState([] as Array<IUser>);

  const resolvedCases = () => {
    return userSupport.supports.filter(
      (item) => item.status.toLowerCase() === "completed"
    );
  };

  const handleShowUserDetails = (user: IUser) => {
    fetchUserDetails(user.email);
    setSelectedUser(user);
    setShowUserDetails(!showUserDetails);
  };

  const handleShowSuppportDetails = (item?: ISupport) => {
    setShowSupportDetails(!showSupportDetails);
    if (item) setSelectedSupport(item);
  };

  async function fetchUsers() {
    try {
      const res = await axios.get(`${BASE_URL}/${apiEndpoints.USERS}`);
      setAllUsers(res.data.data);
    } catch (error) {
      toast.error("Error fetching users from database", { theme: "colored" });
    }
  }

  async function fetchUserDetails(email: string) {
    try {
      const res = await axios.get(
        `${BASE_URL}/${apiEndpoints.SUPPORT}/${email}`
      );
      setUserSupport(res?.data?.data);
    } catch (error) {
      toast.error("Error fetcing user support details", { theme: "colored" });
    }
  }

  function getInRangeItems(array: Array<IUser>) {
    const lowerLimit = (pageIndex - 1) * itemCount;
    const upperLimit = itemCount * pageIndex;
    const res = array.filter((_, idx) => idx >= lowerLimit && idx < upperLimit);
    return res;
  }

  function getButtomPagination() {
    const number = Math.ceil(allUsers?.length / itemCount);
    return number;
  }

  useEffect(() => {
    fetchUsers();
  }, []);

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
                    {getInRangeItems(allUsers)?.map((item, idx) => (
                      <tr key={idx} className="text-sm">
                        <td className="pt-4">
                          <div className="flex items-center gap-2">
                            <img
                              className="rounded-full w-7"
                              src={item.imgUrl ?? girl}
                              alt={item?.name}
                            />
                            <p className="font-semibold">{item.name}</p>
                          </div>
                        </td>
                        <td className="pt-4">{item.phone}</td>
                        <td className="pt-4">{item.email}</td>
                        <td className="pt-4">
                          <button
                            onClick={() => handleShowUserDetails(item)}
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
                  Showing{" "}
                  <span className="font-semibold">
                    {allUsers?.length ? itemCount * (pageIndex - 1) + 1 : "0"}
                  </span>{" "}
                  to{" "}
                  <span className="font-semibold">
                    {" "}
                    {allUsers?.length ? itemCount * pageIndex : 0}{" "}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold">
                    {" "}
                    {allUsers?.length || 0}{" "}
                  </span>
                  Entries
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <button
                    className="disabled:opacity-50"
                    onClick={() => setPageIndex((prev) => prev - 1)}
                    disabled={pageIndex === 1}
                  >
                    <img className="w-2.5 mr-2" src={previous} alt="previous" />
                  </button>
                  {[...Array(getButtomPagination())].map((_, idx) => (
                    <p
                      onClick={() => setPageIndex(idx + 1)}
                      role={"button"}
                      className={`cusor-pointer text-white rounded px-2 py-1 bg-blue-500 ${
                        pageIndex === idx + 1 && "scale-[1.25] font-semibold"
                      }`}
                    >
                      {idx + 1}
                    </p>
                  ))}
                  <button
                    className="disabled:opacity-50 "
                    disabled={pageIndex * itemCount >= allUsers?.length}
                    onClick={() => setPageIndex((prev) => prev + 1)}
                  >
                    <img className="w-2.5 ml-2" src={next} alt="next" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              {!showSupportDetails ? (
                <div className="flex flex-col">
                  <div className="border-b">
                    <button
                      onClick={() => setShowUserDetails(false)}
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
                            {selectedUser?.name}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="font-semibold opacity-70 text-base whitespace-nowrap">
                            Sex :
                          </p>
                          <p>{selectedUser?.gender ?? "null"}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="font-semibold opacity-70 text-base whitespace-nowrap">
                            Age :
                          </p>
                          <p>{selectedUser?.age ?? "null"}</p>
                        </div>
                        <p>{selectedUser?.email ?? "null"}</p>
                        <div className="flex items-center gap-3">
                          <p className="font-semibold opacity-70 text-base whitespace-nowrap">
                            Occupation :
                          </p>
                          <p>{selectedUser?.occupation ?? "null"}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="font-semibold opacity-70 text-base whitespace-nowrap">
                            Phone :
                          </p>
                          <p>{selectedUser?.phone ?? "null"}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="font-semibold opacity-70 text-base whitespace-nowrap">
                            Marital Status :
                          </p>
                          <p>{selectedUser?.marital_status ?? "null"}</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <p className="font-semibold opacity-70 text-lg whitespace-nowrap">
                            State :
                          </p>
                          <p className="mt-1.5">
                            {selectedUser?.location ?? "null"}{" "}
                          </p>
                        </div>
                        {/* <button className="ml-[unset] px-14 mt-10 py-3 rounded bg-primaryBlue text-white w-fit">
                          Assign
                        </button> */}
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="font-bold">
                          Submitted Case{" "}
                          <span>({userSupport?.analytics?.allCount})</span>
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
                            {userSupport?.analytics?.allCount ? (
                              <tbody>
                                {userSupport?.supports?.map((item, idx) => (
                                  <tr key={idx} className="text-sm">
                                    <td className="pt-4">
                                      {trimText(item.message)}
                                    </td>
                                    <td className="pt-4">
                                      {moment(item.createdAt).format("l") ??
                                        "09-09-2019"}
                                    </td>
                                    <td className="pt-4 pr-3">
                                      <button
                                        // onClick={() => handleShowUserDetails()}
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
                                            handleShowSuppportDetails(item)
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
                            ) : null}
                          </table>
                          {userSupport?.analytics?.allCount ? null : <Empty />}
                        </div>
                      </div>
                      <div className="mt-10">
                        <p className="font-bold">Resolved Cases</p>
                        {userSupport?.analytics?.completedCount ? (
                          <div className="mt-3">
                            {resolvedCases().map((item, idx) => (
                              <div
                                key={idx}
                                className="mb-4 text-sm grid grid-cols-[.7fr,.3fr] gap-3"
                              >
                                <p className="">{item.message}</p>
                                <button className="px-4 py-2 h-fit w-fit text-white bg-primaryBlue rounded">
                                  View details
                                </button>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="">
                            <Empty content="no resolved cases yet." />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <SelectedSupport
                  userEmail={selectedUser.email}
                  selectedSupport={selectedSupport}
                  getUserSupports={fetchUserDetails}
                  handleShowSuppportDetails={handleShowSuppportDetails}
                />
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
