import { useState, useRef, useEffect, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import bell from "../assets/images/bell.png";
import suleiman from "../assets/images/suleiman.png";

import { UsersContext } from "../contexts/Users";
import { Dashboard } from "../contexts/Dashboard";

interface HeaderProps {
  dashboard?: boolean;
}

const Header = ({ dashboard }: HeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("Home");

  const { loggedInUser, setLoggedInUser } = useContext(UsersContext);
  const { isDashboardOpen, setIsDashboardOpen } = useContext(Dashboard);

  const navRef = useRef<HTMLElement | null>(null);
  const subMenuRef = useRef<HTMLDivElement | null>(null);

  const links = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    {
      name: "Report",
      to: "#",
      subMenu: [
        { text: "Emergency", to: "/report/emergency" },
        { text: "Detailed Reporting", to: "/report/detailed-reporting" },
        { text: "Support Group", to: "/report/support" },
        { text: "FAQs", to: "/report/faq" }
      ]
    },
    { name: "Prevention", to: "/prevention" },
    { name: "Contact Us", to: "/contact-us" },
    {
      name: JSON.stringify(loggedInUser) === "{}" ? "Login" : "Logout",
      to: JSON.stringify(loggedInUser) === "{}" ? "/login" : "#",
      onClick: (e: Event) => {
        e.preventDefault();
      }
    }
  ];

  function handleToggleSideNav() {
    navRef.current?.classList.toggle("open");
  }

  function handleClick(name: string) {
    if (name === "Report") return;
    if (name === "Logout") {
      setLoggedInUser({});
      navigate("/");
      return;
    }
    setActiveLink(name);
    navRef.current?.classList.remove("open");
  }

  useEffect(() => {
    const path = location.pathname.split("/");
    if (path.includes("services")) {
      setActiveLink("Services");
    } else if (path.includes("report")) {
      setActiveLink("Report");
    }
  }, [location.pathname]);

  return (
    <header className=" fixed top-0 left-0 shadow-md z-10  px-[5%] sm:px-[6%] bg-primaryBlue w-full">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center text-white h-20  ">
        <div className="logo text-2xl font-bold">
          <a href="/">farcry</a>
        </div>
        <nav ref={navRef} className="fixed lg:static">
          <ul className="flex items-center space-x-8">
            {links.map((item, idx) => (
              <li
                onClick={() => handleClick(item.name)}
                className={`${
                  activeLink === item.name && "active"
                } group relative`}
                key={idx}
              >
                <NavLink to={item.to && item.to}>{item.name}</NavLink>
                {item.subMenu && (
                  <div
                    ref={subMenuRef}
                    className="shadow-md border-red-400 hidden group-hover:block lg:absolute top-6 -left-12 lg:pt-8 w-52 sm:w-60"
                  >
                    <ul className="flex flex-col sm:block gap-3 mt-3 lg:mt-[unset] ">
                      {item.subMenu.map((menu, idx) => (
                        <li
                          onClick={() => {
                            navigate(menu.to);
                            navRef.current?.classList.remove("open");
                            if (subMenuRef.current)
                              subMenuRef.current.classList.add("hide");
                            setTimeout(() => {
                              subMenuRef.current &&
                                subMenuRef.current.classList.remove("hide");
                            }, 0);
                          }}
                          className=" text-sm hover:bg-primaryBlue hover:text-white text-black pl-6 lg:!px-10 py-2 whitespace-nowrap cursor-pointer bg-white bg-opacity-80"
                          key={idx}
                        >
                          {" "}
                          {menu.text}{" "}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
            {JSON.stringify(loggedInUser) === "{}" ? (
              <li onClick={() => navigate("/donate")}>
                <button className="border border-gold rounded-md px-6 py-2">
                  Donate
                </button>
              </li>
            ) : (
              <div className="flex items-center gap-4 ml-10">
                <img className="cursor-pointer" src={bell} alt="bell" />
                <img
                  className="w-8 h-8 rounded-full cursor-pointer"
                  src={suleiman}
                  alt="suleiman"
                />
              </div>
            )}
            <IoMdClose
              color="coral"
              onClick={handleToggleSideNav}
              className="block lg:hidden absolute !mt-4 right-6 top-1"
              size={26}
            />
          </ul>
        </nav>
        {!dashboard ? (
          <div data-menu className="btn block cursor-pointer lg:hidden">
            <IoIosMenu onClick={handleToggleSideNav} size={30} />
          </div>
        ) : (
          <div data-menu className="btn block cursor-pointer lg:hidden">
            <IoIosMenu
              onClick={() => setIsDashboardOpen((prev: boolean) => !prev)}
              size={30}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
