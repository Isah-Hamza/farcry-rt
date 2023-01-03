import { useState } from "react";
import DashboardSidebar from "../../components/DashboardSidebar";
import Header from "../../components/Header";
import { sidebarList } from "../../data/AdminDashboard";

import mijenti from "../../assets/images/mijente.png";
import { VscClose } from "react-icons/vsc";

const AdminUsers = () => {
  const partners = [
    {
      imgUrl: mijenti,
      content: "Having been sacked fr no reasons with out pay",
      email: "Bipasu@gmail.com",
      category: "law firm"
    },
    {
      imgUrl: mijenti,
      content: "Having been sacked fr no reasons with out pay",
      email: "Bipasu@gmail.com",
      category: "law firm"
    },
    {
      imgUrl: mijenti,
      content: "Having been sacked fr no reasons with out pay",
      email: "Bipasu@gmail.com",
      category: "law enforcement agency"
    },
    {
      imgUrl: mijenti,
      content: "Having been sacked fr no reasons with out pay",
      email: "Bipasu@gmail.com",
      category: "law enforcement agency"
    }
  ];

  const [addPartner, setAddPartner] = useState(false);

  const toggleAddPartner = () => setAddPartner(!addPartner);

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] overflow-y-auto">
      <Header dashboard />
      <div className="flex-1 flex">
        <DashboardSidebar sidebarList={sidebarList} />
        <main className="w-full lg:w-4/5 bg-[#fff] h-full px-10 ">
          <div className="h-full flex flex-col">
            <div className="mt-8 flex items-center justify-between pb-5 border-b">
              <p className="text-xl font-semibold">Our Amazing Partners</p>
              <button
                onClick={toggleAddPartner}
                className="text-white bg-primaryBlue py-2 px-5 rounded text-sm"
              >
                Add new Partner
              </button>
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
      {addPartner && (
        <div className="inset-0 fixed z-[1000] bg-black/50 grid place-content-center">
          <form className="bg-white rounded-md p-6 pt-8 relative">
            <VscClose size={22} className="absolute right-4 top-4 cursor-pointer" onClick={toggleAddPartner} />
            <p className="font-semibold text-lg">Add New Partner</p>
            <div className="flex flex-col mt-6">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="name"
                className=" w-[350px] p-3 py-2 rounded border outline-none"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="type">Partner Type</label>
              <select
                name="type"
                placeholder="name"
                className=" w-[350px] p-3 py-2 rounded border outline-none"
              >
                <option>Law Firm</option>
                <option>Law Enforcement Agency</option>
                <option>Health Care Agency</option>
              </select>
              <div className="flex flex-col mt-4">
                <label htmlFor="name">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className=" w-[350px] p-3 py-2 rounded border outline-none"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="about">About Partner</label>
                <textarea
                  placeholder="Enter more information about partner"
                  className=" w-[350px] p-3 py-2 rounded border outline-none"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={toggleAddPartner}
                className="text-white bg-primaryBlue py-2 px-5 rounded text-sm mt-7"
              >
                Add new Partner
              </button>
            </div>
          </form>
        </div>
      )}
      {/* <Footer /> */}
    </div>
  );
};

export default AdminUsers;
