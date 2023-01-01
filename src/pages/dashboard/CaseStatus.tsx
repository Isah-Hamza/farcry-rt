import React from "react";
import { BiFilter, BiSearch } from "react-icons/bi";
import { MdAddBox } from "react-icons/md";
import DashboardSidebar from "../../components/DashboardSidebar";
import Header from "../../components/Header";
import { sidebarList } from "../../data/UserDashboard";

const CaseStatus = () => {
  const tableData = [
    {
      case: " memory care patients in the United States has been sentenced to three years in prison.",
      date: "2021/12/22",
      time: "09:45pm",
      status: "pending"
    },
    {
      case: " memory care patients in the United States has been sentenced to three years in prison.",
      date: "2021/12/22",
      time: "09:45pm",
      status: "solved"
    },
    {
      case: " memory care patients in the United States has been sentenced to three years in prison.",
      date: "2021/12/22",
      time: "09:45pm",
      status: "pending"
    }
  ];
  const items = [
    { name: "all", value: 13 },
    { name: "pending", value: 20 },
    { name: "verified", value: 9 },
    { name: "investigating", value: 3 }
  ];
  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] overflow-y-auto">
      <Header dashboard />
      <div className="flex-1 flex">
        <DashboardSidebar sidebarList={sidebarList} />
        <main className="w-full lg:w-4/5 bg-[#fff] h-full px-10 pt-10">
          <div className="flex justify-between items-center rounded-md py-3  max-w-[1000px]">
            <div className="flex gap-5 flex-col md:flex-row ">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <span className="font-bold  capitalize">{item.name} </span>{" "}
                  <span className="text-xs -mt-[2px] font-semibold px-1 py-1 shadow-md rounded-md bg-white">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="gap-4 items-center hidden md:flex">
              <button>
                <BiSearch size={24} />
              </button>
              <button>
                <BiFilter size={24} />
              </button>
              <button>
                <MdAddBox color="blue" size={24} />
              </button>
            </div>
          </div>
          <div className="mt-10 flex gap-6 max-w-5xl">
            <div className="w-1/2 bg-[#F5F6FA] rounded-md p-5">
              <div className="w-full justify-between flex items-center">
                <p className="font-bold">Recently Submitted</p>
                <div className="flex cursor-pointer items-center font-bold -mt-2">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </div>
              <div className="py-5 text-sm">
                <p>
                  A Nigerian health worker, Godbless Uwadiegwu, who pleaded
                  guilty to sex crimes involving memory care patients in the
                  United States has been sentenced to three years in prison.
                </p>
              </div>
              <div className="flex text-sm justify-between items-center">
                <p className="opacity-70">2021/12/22 09:59 AM</p>
                <p className="opacity-70">pending</p>
              </div>
              <div className="mt-4">
                <p className="font-semibold">Assigned Body</p>
                <div className="flex gap-2 opacity-70">
                  <p>Organisation:</p>
                  <p>Berkete Family</p>
                </div>
                <div className="flex gap-2 opacity-70">
                  <p>Address:</p>
                  <p>Off obafemi awo road Human Radio</p>
                </div>
              </div>
            </div>
            <div className="w-2/3 bg-[#F5F6FA] rounded-md">
              <div className="w-full overflow-auto user-table  text-sm p-3 pt-1 rounded-md">
                <table className="min-w-[470px] md:min-w-[unset] pt-5">
                  <thead>
                    <tr className="text-left pb-2 border-b">
                      <th className="py-2">Case</th>

                      <th className="py-2 pl-5">Date</th>
                      <th className="py-2">Status</th>
                      <th className="py-2">
                        <div className="flex flex-col font-bold -mt-4">
                          <span className="h-1 ">.</span>
                          <span className="h-1 ">.</span>
                          <span className="h-1 ">.</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((data, idx) => (
                      <tr key={idx}>
                        <td className="py-4 border-b">{data.case}</td>
                        <td className="py-4 border-b">
                          <div className="mr-20 ml-5">
                            <p>{data.date}</p>
                            <p>{data.time}</p>
                          </div>
                        </td>
                        <td className="py-4 border-b mr-5">{data.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default CaseStatus;
