import { useContext, useState } from "react";
import DashboardSidebar from "../../components/DashboardSidebar";
import Header from "../../components/Header";
import { sidebarList } from "../../data/AdminDashboard";
import gallery from "../../assets/images/gallery-add.png";
import axios, { AxiosError } from "axios";
import { apiEndpoints, BASE_URL } from "../../config/Endpoints";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { UsersContext } from "../../contexts/Users";
import { ImSpinner2 } from "react-icons/im";
import * as Yup from "yup";
import { Error } from "../Emergency";

const AdminUsers = () => {
  const [activeTab, setActiveTab] = useState("Profile Settings");
  const tabs = ["Profile Settings", "Password Settings"];

  const { loggedInUser, setLoggedInUser } = useContext(UsersContext);
  const { _id, name, phone, email } = loggedInUser;

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name,
      email,
      phone
    },
    onSubmit(values) {
      // setEditInfo(false);
      console.log(values);
      saveChanges(values);
    }
  });

  const validationSchema = Yup.object().shape({
    old_password: Yup.string().required("This field is required"),
    new_password: Yup.string().required("This field is required"),
    confirm_password: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref("new_password"), null], "The two passwords must match")
  });

  const passwordFormik = useFormik({
    initialValues: {
      confirm_password: "",
      old_password: "",
      new_password: ""
    },
    validationSchema,
    onSubmit(values) {
      console.log(values);
      saveChanges(values);
    }
  });

  async function saveChanges(values: Object) {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${BASE_URL}/${apiEndpoints.USERS}/${_id}`,
        values
      );
      toast.success(
        `${res.data.message}` ?? "Profile updated Successfully!",
        { theme: "colored" }
      );
      setLoggedInUser(res?.data?.data);
    } catch (error: any) {
      console.log(error);
      toast.error(
        `${error.response.data.message}` ?? "Error updating details",
        { theme: "colored" }
      );
    } finally {
      setLoading(false);
    }
  }

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
            <form
              onSubmit={formik.handleSubmit}
              className="shadow w-fit rounded p-7"
            >
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
                  <label className="font-medium">Full name</label>
                  <input
                    className="bg-[#fafbfc] min-w-[350px] px-3 py-2 rounded outline-none border text-sm"
                    type="text"
                    defaultValue={formik.values.name}
                    {...formik.getFieldProps("name")}
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label className="font-medium">Email</label>
                  <input
                    className="bg-[#fafbfc] min-w-[350px] px-3 py-2 rounded outline-none border text-sm"
                    type="email"
                    defaultValue={formik.values.email}
                    {...formik.getFieldProps("email")}
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label className="font-medium">Phone Number</label>
                  <input
                    className="bg-[#fafbfc] min-w-[350px] px-3 py-2 rounded outline-none border text-sm"
                    type="text"
                    defaultValue={formik.values.phone}
                    {...formik.getFieldProps("phone")}
                  />
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="min-w-[150px] disabled:bg-opacity-50 text-white rounded mt-7 bg-[coral] px-5 py-2"
                >
                  {loading ? (
                    <ImSpinner2 size={20} className="animate-spin mx-auto" />
                  ) : (
                    "Update Profile"
                  )}
                </button>
              </div>
            </form>
          ) : (
            <form
              onSubmit={passwordFormik.handleSubmit}
              className="shadow text-sm mt-5 p-7 w-fit"
            >
              <div className="flex flex-col mt-5">
                <label>Old Password</label>
                <input
                  className="bg-[#fafbfc] min-w-[350px] px-3 py-2 rounded outline-none border text-sm"
                  type="password"
                  {...passwordFormik.getFieldProps("old_password")}
                />
                {passwordFormik.touched.old_password &&
                  passwordFormik.errors.old_password && (
                    <Error text={passwordFormik.errors.old_password} />
                  )}
              </div>
              <div className="flex flex-col mt-3">
                <label>New Password</label>
                <input
                  className="bg-[#fafbfc] min-w-[350px] px-3 py-2 rounded outline-none border text-sm"
                  type="password"
                  {...passwordFormik.getFieldProps("new_password")}
                />
                {passwordFormik.touched.new_password &&
                  passwordFormik.errors.new_password && (
                    <Error text={passwordFormik.errors.new_password} />
                  )}
              </div>
              <div className="flex flex-col mt-3">
                <label>Confirm Password</label>
                <input
                  className="bg-[#fafbfc] min-w-[350px] px-3 py-2 rounded outline-none border text-sm"
                  type="password"
                  {...passwordFormik.getFieldProps("confirm_password")}
                />
                {passwordFormik.touched.confirm_password &&
                  passwordFormik.errors.confirm_password && (
                    <Error text={passwordFormik.errors.confirm_password} />
                  )}
              </div>
              <button
                type="submit"
                className="text-white rounded mt-5 bg-[coral] px-5 py-2"
              >
                Change Password
              </button>
            </form>
          )}
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AdminUsers;
