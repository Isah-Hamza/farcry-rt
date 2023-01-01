import { useState } from "react";
import DashboardSidebar from "../../components/DashboardSidebar";
import Header from "../../components/Header";
import { sidebarList } from "../../data/AdminDashboard";
import gallery from "../../assets/images/gallery-add.png";

const AdminUsers = () => {
  const [activeTab, setActiveTab] = useState("Profile Settings");
  const tabs = ["Profile Settings", "Password Settings"];

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] overflow-y-auto">
      <Header dashboard />
      <div className="flex-1 flex">
        <DashboardSidebar sidebarList={sidebarList} />
        <main className="w-full lg:w-4/5 bg-[#fff] h-full py-4 px-10 ">
          <div className="mt-4 mb-6 w-full border-b flex gap-10">
            {tabs.map((tab, idx) => (
              <button
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab && "font-semibold"
                } relative pb-3`}
                key={idx}
              >
                {activeTab === tab && (
                  <div className="bottom-0 absolute w-full h-[2px] rounded-md block bg-primaryBlue"></div>
                )}
                {tab}
              </button>
            ))}
          </div>
          {activeTab === tabs[0] ? (
            <div className="shadow w-fit rounded p-7">
              <p className="text-sm font-semibold">Your Profile Picture</p>
              <div className="bg-[#fafbfc] grid place-content-center border border-dashed rounded h-28 w-28 px-2 mt-3">
                <img
                  className="w-14 h-14 mx-auto"
                  src={gallery}
                  alt="gallery"
                />
                <p className="text-xs text-center mt-2">upload your image</p>
              </div>
              <div className="border-t text-sm mt-5">
                <div className="flex flex-col mt-5">
                  <label>Full name</label>
                  <input
                    className="bg-[#fafbfc] min-w-[350px] px-3 py-2 rounded outline-none border text-sm"
                    type="text"
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <label>Email</label>
                  <input
                    className="bg-[#fafbfc] min-w-[350px] px-3 py-2 rounded outline-none border text-sm"
                    type="email"
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <label>Phone Number</label>
                  <input
                    className="bg-[#fafbfc] min-w-[350px] px-3 py-2 rounded outline-none border text-sm"
                    type="text"
                  />
                </div>
                <button className="text-white rounded mt-5 bg-[coral] px-5 py-2">
                  Update Profile
                </button>
              </div>
            </div>
          ) : (
            <div className="shadow text-sm mt-5 p-7 w-fit">
              <div className="flex flex-col mt-5">
                <label>Old Password</label>
                <input
                  className="bg-[#fafbfc] min-w-[350px] px-3 py-2 rounded outline-none border text-sm"
                  type="password"
                />
              </div>
              <div className="flex flex-col mt-3">
                <label>New Password</label>
                <input
                  className="bg-[#fafbfc] min-w-[350px] px-3 py-2 rounded outline-none border text-sm"
                  type="password"
                />
              </div>
              <div className="flex flex-col mt-3">
                <label>Confirm Password</label>
                <input
                  className="bg-[#fafbfc] min-w-[350px] px-3 py-2 rounded outline-none border text-sm"
                  type="password"
                />
              </div>
              <button className="text-white rounded mt-5 bg-[coral] px-5 py-2">
                Change Password
              </button>
            </div>
          )}
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AdminUsers;
