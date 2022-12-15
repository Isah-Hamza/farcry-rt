import { useState, useContext, ReactElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import suleiman from "../assets/images/suleiman.png";
import { Dashboard } from "../contexts/Dashboard";

type Props = {
  sidebarList?: Array<{
    title: string;
    icon: ReactElement;
    url?: string;
  }>;
};

const DashboardSidebar = ({ sidebarList }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDashboardOpen } = useContext(Dashboard);

  const [activeTab, setActiveTab] = useState(() => {
    let path = location.pathname;
    let currentPath = path.split("/");
    console.log(currentPath);
    return currentPath[currentPath.length - 1];
  });

  function handleNavigate(item: { title: string; url: string }) {
    setActiveTab(item.title);
    navigate(item.url);
  }

  return (
    <aside
      className={`${
        isDashboardOpen ? "left-0" : "left-[-350px]"
      } transition-all duration-500 fixed left-0 top-[80px] z-20 lg:static w-1/5 min-w-[300px] bg-primaryBlue text-white h-full`}
    >
      <div className="flex gap-3 justify-center py-5">
        <img className="w-10 h-10 rounded-full" src={suleiman} alt="suleiman" />
        <div className="flex flex-col">
          <p className="font-medium text-sm">Suleiman Abdullahi</p>
          <p className="text-xs opacity-70">Student</p>
        </div>
      </div>
      <div>
        <ul className="flex flex-col gap-5 mt-10">
          {sidebarList?.map((item, idx) => (
            //@ts-ignore
            <li
              //@ts-ignore
              onClick={() => handleNavigate(item)}
              key={idx}
              className={`${
                activeTab.toLowerCase() === item.title.toLowerCase() &&
                "!font-bold translate-x-[7%] shadow-md !opacity-100"
              } 
                     opacity-80 transition-all duration-300 bg-primaryBlue cursor-pointer flex py-1 capitalize gap-3 items-center pl-20`}
            >
              {item.icon}
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
