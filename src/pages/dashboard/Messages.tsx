import { useState } from "react";
import DashboardSidebar from "../../components/DashboardSidebar";
import Header from "../../components/Header";

import search from "../../assets/images/search-normal-1 1.png";
import filter from "../../assets/images/Filter 1.png";
import star from "../../assets/images/star.png";
import archive from "../../assets/images/archive.png";
import deleteIcon from "../../assets/images/delete.png";

import { sidebarList } from '../../data/UserDashboard'

const Messages = () => {
  const [composeMsg, setComposeMsg] = useState(false);
  const headerItems = [
    {
      name: "Inbox",
      count: 12,
    },
    {
      name: "Trash",
      count: 2,
    },
    {
      name: "Sent",
      count: 10,
    },
    {
      name: "Archive",
      count: 22,
    },
  ];
  const [activeHeaderItem, setActiveHeaderItem] = useState("Inbox");

  const dummyMessages = [
    {
      name: "Suleiman Syed",
      message: "Lorem ipsum dolor sit amet, consectutor",
      date: "31/12/2020",
    },
    {
      name: "John Doe",
      message: "Lorem ipsum dolor sit amet, consectutor",
      date: "20/11/2004",
    },
    {
      name: "Bruce Wayne",
      message: "Lorem ipsum dolor sit amet, consectutor",
      date: "31/12/2020",
    },
    {
      name: "Wonder Woman",
      message: "Lorem ipsum dolor sit amet, consectutor",
      date: "31/12/2022",
    },
  ];

  const handleClick = (name: string) => {
    setActiveHeaderItem(name);
    setComposeMsg(false);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)]">
      <Header dashboard />
      <div className="flex-1 flex">
        <DashboardSidebar sidebarList={sidebarList}/>
        <main className="w-full lg:w-4/5 bg-[#DBDFEAA6] h-full pt-20 pr-10 pl-16">
          <div className="flex item-center justify-between">
            <div className="top flex gap-10">
              {headerItems.map((item, idx) => (
                <button
                  onClick={() => handleClick(item.name)}
                  key={idx}
                  className={`${
                    activeHeaderItem !== item.name && "opacity-50"
                  } flex items-center gap-2 text-sm`}
                >
                  <p className={`text-base font-semibold`}>{item.name}</p>
                  <div
                    className={`${item} shadow-md min-w-[20px] px-1 py-.5 rounded-md bg-[#ccc] text-[10px]`}
                  >
                    {item.count}
                  </div>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button>
                <img className="w-4" src={search} alt="search" />
              </button>
              <button>
                <img className="w-4" src={filter} alt="filter" />
              </button>
              <button
                onClick={() => {
                  setComposeMsg(true);
                  setActiveHeaderItem("");
                }}
                className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 transition duration-500 ease-in rounded px-6 py-2"
              >
                <img src="../../assets/images/icon-plus.svg" alt="" />
                <span className="text-sm text-white">Compose</span>
              </button>
            </div>
          </div>
          {!composeMsg ? (
            <div className="buttom grid mt-14 max-w-[850px]">
              {dummyMessages.map((msg, idx) => (
                <div
                  role={"button"}
                  className="msg-container inset rounded flex justify-between py-3 px-4"
                  key={idx}
                >
                  <div className="grid grid-cols-[2fr,4fr,1fr] text-sm gap-10">
                    <p className="font-semibold">{msg.name}</p>
                    <p className="opacity-90">{msg.message}...</p>
                    <p className="opacity-90">{msg.date}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <img
                      className="w-4"
                      role={"button"}
                      src={star}
                      alt="star"
                    />
                    <img
                      className="w-4"
                      role={"button"}
                      src={archive}
                      alt="archive"
                    />
                    <img
                      className="w-4"
                      role={"button"}
                      src={deleteIcon}
                      alt="deleteIcon"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid mt-10 max-w-xl">
              <div className="grid">
                <p className="font-semibold">Subject</p>
                <input
                  type="text"
                  className="text-sm bg-transparent border-b border-blue-500  py-1 outline-none"
                />
              </div>
              <div className="grid mt-4">
                <p className="font-semibold">Message</p>
                <textarea
                  className="text-sm bg-transparent border-b border-blue-500 py-1 outline-none h-32"
                  placeholder="Your message goes here..."
                ></textarea>
              </div>
              <button className="w-fit mt-6 text-sm px-9 py-2 rounded bg-blue-500 text-white">
                Send
              </button>
            </div>
          )}
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Messages;
