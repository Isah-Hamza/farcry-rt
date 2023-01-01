import { useState } from "react";
import DashboardSidebar from "../../components/DashboardSidebar";
import Header from "../../components/Header";
import { sidebarList } from "../../data/AdminDashboard";

import mijenti from "../../assets/images/mijente.png";

const AdminUsers = () => {
  const partners = [
    {
      imgUrl: mijenti,
      content: "Having been sacked fr no reasons with out pay",
      email: "Bipasu@gmail.com",
      category: "law firm",
    },
    {
      imgUrl: mijenti,
      content: "Having been sacked fr no reasons with out pay",
      email: "Bipasu@gmail.com",
      category: "law firm",
    },
    {
      imgUrl: mijenti,
      content: "Having been sacked fr no reasons with out pay",
      email: "Bipasu@gmail.com",
      category: "law enforcement agency",
    },
    {
      imgUrl: mijenti,
      content: "Having been sacked fr no reasons with out pay",
      email: "Bipasu@gmail.com",
      category: "law enforcement agency",
    },
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] overflow-y-auto">
      <Header dashboard />
      <div className="flex-1 flex">
        <DashboardSidebar sidebarList={sidebarList} />
        <main className="w-full lg:w-4/5 bg-[#fff] h-full px-10 ">
          <div className="h-full flex flex-col">
            <div className="mt-8 flex items-center justify-between pb-5 border-b">
              <p className="text-xl font-semibold">Our Amazing Partners</p>
            </div>
            <div className="max-w-4xl">
              <div>
                <p className="text-sm font-semibold mb-3 mt-5">Law Firms</p>
                {partners
                  .filter((item) => item.category === "law firm")
                  .map((item, idx) => (
                    <div
                      key={idx}
                      className="mb-3 flex justify-between bg-[#fafaff] px-7 py-5"
                    >
                      <img
                        className="h-7"
                        src={item.imgUrl}
                        alt="alternative"
                      />
                      <p>{item.content}</p>
                      <p>{item.email}</p>
                      <button className="text-white text-sm px-6 py-1.5 rounded bg-blue-500">
                        View
                      </button>
                    </div>
                  ))}
              </div>
              <div>
                <p className="text-sm font-semibold mb-3 mt-8">
                  Law Enforcement Agencies
                </p>
                {partners
                  .filter((item) => item.category !== "law firm")
                  .map((item, idx) => (
                    <div
                      key={idx}
                      className="mb-3 flex justify-between bg-[#fafaff] px-7 py-5"
                    >
                      <img
                        className="h-7"
                        src={item.imgUrl}
                        alt="alternative"
                      />
                      <p>{item.content}</p>
                      <p>{item.email}</p>
                      <button className="text-white text-sm px-6 py-1.5 rounded bg-blue-500">
                        View
                      </button>
                    </div>
                  ))}
              </div>
              <div></div>
            </div>
          </div>
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AdminUsers;
