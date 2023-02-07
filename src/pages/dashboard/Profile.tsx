import { useContext, useState } from "react";
import Header from "../../components/Header";
import profile from "../../assets/images/profile.jpg";
import DashboardSidebar from "../../components/DashboardSidebar";
import { sidebarList } from "../../data/UserDashboard";
import { UsersContext } from "../../contexts/Users";

import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import { apiEndpoints, BASE_URL } from "../../config/Endpoints";
import { ImSpinner2 } from "react-icons/im";

const Profile = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UsersContext);
  const {
    _id,
    name,
    phone,
    location,
    age,
    email,
    gender,
    occupation,
    marital_status
  } = loggedInUser;

  const [editInfo, setEditInfo] = useState(false);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name,
      email,
      gender,
      occupation,
      marital_status,
      location,
      age
    },
    onSubmit(values) {
      setEditInfo(false);
      console.log(values);
      saveChanges(values);
    }
  });

  async function saveChanges(values: Object) {
    try {
      const res = await axios.patch(
        `${BASE_URL}/${apiEndpoints.USERS}/${_id}`,
        values
      );
      toast.success("Status updated Successfully!", { theme: "colored" });
      setLoggedInUser(res?.data?.data);
    } catch (error) {
      toast.error("Error updating details");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)]">
      <Header dashboard />
      <div className="flex-1 flex">
        <DashboardSidebar sidebarList={sidebarList} />
        <main className="w-full lg:w-4/5 bg-[#DBDFEAA6] overflow-y-auto h-[calc(100vh-5rem)]">
          <div className="ml-5 sm:ml-20 mt-7 sm:mt-20 mb-10 ">
            <p className="text-2xl font-bold mb-10">User Profile</p>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col lg:flex-row gap-14 xl:gap-20"
            >
              <div className="flex flex-col lg:items-center">
                <div className="w-32 h-32 rounded-full">
                  <img
                    className="w-full object-cover rounded-xl"
                    src={profile}
                    alt="profile"
                  />
                </div>
                <p className="text-sm mt-1 ml-5 sm:ml-[unset] text-primaryBlue font-medium underline cursor-pointer">
                  change photo
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <p className="font-semibold opacity-70 text-xl whitespace-nowrap">
                    Name :
                  </p>
                  {editInfo ? (
                    <input
                      className="border outline-none border-blue-400 text-sm bg-transparent p-2 rounded"
                      type={"text"}
                      placeholder="name"
                      {...formik.getFieldProps("name")}
                    />
                  ) : (
                    <p>{name}</p>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-semibold opacity-70 text-xl whitespace-nowrap">
                    Email :
                  </p>
                  {editInfo ? (
                    <input
                      className="border outline-none border-blue-400 text-sm bg-transparent p-2 rounded"
                      type={"email"}
                      placeholder="email"
                      {...formik.getFieldProps("email")}
                    />
                  ) : (
                    <p>{email}</p>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-semibold opacity-70 text-xl whitespace-nowrap">
                    Sex :
                  </p>
                  {editInfo ? (
                    <select
                      {...formik.getFieldProps("gender")}
                      className="border outline-none border-blue-400 text-sm bg-transparent p-2 rounded"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  ) : (
                    <p>{gender ?? "null"}</p>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-semibold opacity-70 text-xl whitespace-nowrap">
                    Age :
                  </p>
                  {editInfo ? (
                    <input
                      className="border outline-none border-blue-400 text-sm bg-transparent p-2 rounded"
                      type={"number"}
                      {...formik.getFieldProps("age")}
                    />
                  ) : (
                    <p>{age ?? "null"}</p>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-semibold opacity-70 text-xl whitespace-nowrap">
                    Occupation :
                  </p>
                  {editInfo ? (
                    <input
                      className="border outline-none border-blue-400 text-sm bg-transparent p-2 rounded"
                      type={"text"}
                      {...formik.getFieldProps("occupation")}
                    />
                  ) : (
                    <p>{occupation ?? "null"}</p>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-semibold opacity-70 text-xl whitespace-nowrap">
                    Marital Status :
                  </p>
                  {editInfo ? (
                    <input
                      className="border outline-none border-blue-400 text-sm bg-transparent p-2 rounded"
                      type={"text"}
                      {...formik.getFieldProps("marital_status")}
                    />
                  ) : (
                    <p>{marital_status ?? "null"}</p>
                  )}
                </div>
                <div className="flex items-start sm:items-center gap-3">
                  <p className="font-semibold opacity-70 text-lg whitespace-nowrap">
                    Address :
                  </p>
                  {editInfo ? (
                    <input
                      className="border outline-none border-blue-400 text-sm bg-transparent p-2 rounded"
                      type={"text"}
                      {...formik.getFieldProps("location")}
                    />
                  ) : (
                    <p className="mt-1.5">{location}</p>
                  )}
                </div>
                {!editInfo ? (
                  <div
                    onClick={() => setEditInfo(true)}
                    role="button"
                    className="ml-[unset] px-20 mt-10 py-2.5 rounded bg-primaryBlue text-white w-fit"
                  >
                    Edit
                  </div>
                ) : (
                  <div>
                    <button
                      disabled={loading}
                      type="submit"
                      className="disabled:opacity-50 ml-[unset] px-20 mt-10 py-2.5 rounded bg-primaryBlue text-white w-fit"
                    >
                      {loading ? (
                        <ImSpinner2
                          size={22}
                          className="mx-auto animate-spin"
                        />
                      ) : (
                        "Save"
                      )}
                    </button>
                    <button
                      onClick={() => setEditInfo(false)}
                      type="button"
                      className="disabled:opacity-50 px-10 ml-5 mt-10 py-2.5 rounded bg-[coral] text-white w-fit"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Profile;
