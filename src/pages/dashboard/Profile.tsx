import { useContext } from "react";
import Header from "../../components/Header";
import suleiman from "../../assets/images/suleiman.png";
import DashboardSidebar from "../../components/DashboardSidebar";
import { sidebarList } from "../../data/UserDashboard";
import { UsersContext } from "../../contexts/Users";

const Profile = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UsersContext);
  //@ts-ignore
  const { name, phone, location, age, email } = loggedInUser;
  return (
    <div className="flex flex-col h-[calc(100vh-5rem)]">
      <Header dashboard />
      <div className="flex-1 flex">
        <DashboardSidebar sidebarList={sidebarList} />
        <main className="w-full lg:w-4/5 bg-[#DBDFEAA6] h-full">
          <div className="ml-5 sm:ml-20 mt-7 sm:mt-20 mb-10 ">
            <p className="text-2xl font-bold mb-10">User Profile</p>
            <div className="flex flex-col lg:flex-row gap-14 xl:gap-20">
              <div className="flex flex-col lg:items-center">
                <div className="w-32 h-32 rounded-full">
                  <img
                    className="w-full object-cover"
                    src={suleiman}
                    alt="suleiman"
                  />
                </div>
                <p className="ml-5 sm:ml-[unset] text-primaryBlue font-medium underline cursor-pointer">
                  change photo
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <p className="font-semibold opacity-70 text-xl whitespace-nowrap">
                    Name :
                  </p>
                  <p>{name}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-semibold opacity-70 text-xl whitespace-nowrap">
                    Email :
                  </p>
                  <p>{email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-semibold opacity-70 text-xl whitespace-nowrap">
                    Sex :
                  </p>
                  <p>Male</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-semibold opacity-70 text-xl whitespace-nowrap">
                    Age :
                  </p>
                  <p>{age ?? "null"}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-semibold opacity-70 text-xl whitespace-nowrap">
                    Occupation :
                  </p>
                  <p>Student</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-semibold opacity-70 text-xl whitespace-nowrap">
                    Marital Status :
                  </p>
                  <p>Single</p>
                </div>
                <div className="flex items-start sm:items-center gap-3">
                  <p className="font-semibold opacity-70 text-lg whitespace-nowrap">
                    Address :
                  </p>
                  <p className="mt-1.5">{location}</p>
                </div>
                <button className="ml-[unset] px-20 mt-10 py-3 rounded bg-primaryBlue text-white w-fit">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Profile;
