import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { BiArrowBack, BiFilter, BiSearch } from "react-icons/bi";
import { ImSpinner2 } from "react-icons/im";
import { MdAddBox } from "react-icons/md";
import { toast } from "react-toastify";
import DashboardSidebar from "../../components/DashboardSidebar";
import Header from "../../components/Header";
import { apiEndpoints, BASE_URL } from "../../config/Endpoints";
import { UsersContext } from "../../contexts/Users";
import { sidebarList } from "../../data/UserDashboard";
import empty from "../../assets/images/no-data.png";
import moment from "moment";
import { CustomInput, Error } from "../Emergency";
import * as Yup from "yup";
import { useFormik } from "formik";
import { AiOutlineClose } from "react-icons/ai";

interface ISupport {
  case: string;
  createdAt: string;
  status: string;
  message: string;
  assigned_body: {
    name: string;
    address: string;
  };
}

const CaseStatus = () => {
  const { loggedInUser } = useContext(UsersContext);
  const [supports, setSupports] = useState([] as Array<ISupport>);
  const [analytics, setAnalytics] = useState({});
  const [supportLoading, setSupportLoading] = useState(false);
  const [requestSupport, setRequestSupport] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleRequestSupport = () => setRequestSupport(!requestSupport);

  const items = [
    //@ts-ignore
    { name: "all", value: analytics?.allCount },
    //@ts-ignore
    { name: "pending", value: analytics?.pendingCount },
    //@ts-ignore
    { name: "verified", value: analytics?.verifiedCount },
    //@ts-ignore
    { name: "In Progress", value: analytics?.p },
    //@ts-ignore
    { name: "Completed", value: analytics?.completedCount }
  ];

  const validationSchema = Yup.object().shape({
    support_type: Yup.string().required("please select the support type"),
    name: Yup.string().required("Name field is required"),
    email: Yup.string()
      .required("Email field is required")
      .email("Invalid email address, please check"),
    gender: Yup.string().required("Please select your gender"),
    phone: Yup.string().required("Phone number field is required"),
    location: Yup.string().required("Please provide your location"),
    message: Yup.string().required("Please provide your message")
  });

  const handleChange = (e: Event) => {
    //@ts-ignore
    formik.setFieldValue("gender", e.target?.value);
  };

  const formik = useFormik({
    initialValues: {
      //@ts-ignore
      email: loggedInUser?.email,
      support_type: "",
      name: "",
      gender: "",
      phone: "",
      location: "",
      message: ""
    },
    validationSchema,
    onSubmit(values) {
      //@ts-ignore
      values.address = values.location;
      console.log(values);
      RequestSupport(values);
      formik.resetForm();
    }
  });

  async function RequestSupport(data: Object) {
    setLoading(true);
    try {
      await axios.post(`${BASE_URL}/${apiEndpoints.SUPPORT}`, data).then(() => {
        toast.success("Request made successfully! We'll get back to you", {
          theme: "colored"
        });
      });
      setRequestSupport(false);
      getSupports();
    } catch (error) {
      toast.error("Problem requesting for a support. Please try again", {
        theme: "colored"
      });
    } finally {
      setLoading(false);
    }
  }

  const getSupports = async () => {
    setSupportLoading(true);
    try {
      const res = await axios.get(
        //@ts-ignore
        `${BASE_URL}/${apiEndpoints.SUPPORT}/${loggedInUser?.email}`
      );
      setSupports(res?.data?.data.supports);
      setAnalytics(res?.data?.data.analytics);
    } catch (error) {
      toast.error("Error: " + error, { theme: "colored" });
    } finally {
      setSupportLoading(false);
    }
  };

  useEffect(() => {
    console.log("check here", items);
  }, [analytics]);

  useEffect(() => {
    getSupports();
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] overflow-y-auto">
      <Header dashboard />
      <div className="flex-1 flex">
        <DashboardSidebar sidebarList={sidebarList} />
        {!supportLoading ? (
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
                <button onClick={toggleRequestSupport}>
                  <MdAddBox color="blue" size={24} />
                </button>
              </div>
            </div>
            <div className="mt-10 flex gap-6 max-w-5xl">
              <div className="h-fit w-1/2 bg-[#F5F6FA] rounded-md p-5">
                <div className="w-full justify-between flex items-center">
                  <p className="font-bold">Recently Submitted</p>
                  <div className="flex cursor-pointer items-center font-bold -mt-2">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                  </div>
                </div>
                {supports.length ? (
                  <div className="">
                    <div className="py-5 text-sm">
                      <p>{supports[supports.length - 1].message}</p>
                    </div>
                    <div className="flex text-sm justify-between items-center">
                      <p className="opacity-70">
                        {moment(supports[supports.length - 1].createdAt).format(
                          "YYYY-MM-DD h:mm:ss a"
                        )}{" "}
                      </p>
                      <p className="opacity-70">
                        {supports[supports.length - 1].status}
                      </p>
                    </div>
                    <div className="mt-4">
                      <p className="font-semibold">Assigned Body</p>
                      <div className="flex gap-2 opacity-70">
                        <p>Organisation:</p>
                        <p>
                          {supports[supports.length - 1].assigned_body.name ||
                            "Not assigned yet"}
                        </p>
                      </div>
                      <div className="flex gap-2 opacity-70">
                        <p>Address:</p>
                        <p>
                          {supports[supports.length - 1].assigned_body
                            .address || "Not assigned yet"}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <img className="mx-auto w-40" src={empty} alt="no data" />
                    <p>No cases submitted yet.</p>{" "}
                  </div>
                )}
              </div>
              <div className="w-2/3 bg-[#F5F6FA] rounded-md">
                <div className="max-h-[400px] overflow-y-auto w-full overflow-auto user-table  text-sm p-3 pt-1 rounded-md">
                  <table className="w-full h-full min-w-[470px] md:min-w-[unset] pt-5">
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
                    {supports.length ? (
                      <tbody>
                        {supports.map((data, idx) => (
                          <tr key={idx}>
                            <td className="py-4 border-b">{data.message}</td>
                            <td className="py-4 border-b">
                              <div className="mr-20 ml-5">
                                <p className="whitespace-nowrap">
                                  {moment(data?.createdAt).format("YYYY-MM-DD")}{" "}
                                </p>
                                <p className="whitespace-nowrap">
                                  {moment(data?.createdAt).format(
                                    "h:mm:ss a"
                                  ) || "00:00AM"}
                                </p>
                              </div>
                            </td>
                            <td className="py-4 border-b mr-5">
                              {data.status}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    ) : null}
                  </table>
                  {supports.length ? null : (
                    <div className="mt-28 text-center w-full h-full grid place-content-center">
                      <span className="font-semibold">OOPS!</span>
                      No requests to display at <br /> the minute.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>
        ) : (
          <div className="flex-1 grid place-content-center text-center">
            <ImSpinner2 className="mx-auto animate-spin" size={22} />
            <p className="text-semibold">Loading...</p>
          </div>
        )}
      </div>
      {requestSupport ? (
        <div className="fixed z-10 inset-0 bg-black/50 grid place-content-center ">
          <div className="bg-white rounded w-[500px] p-7 max-h-[90vh] overflow-y-auto">
            <div className="relative w-full mx-auto px-5 !py-6 sm:p-10 ">
              <div
                onClick={toggleRequestSupport}
                className="absolute -top-2 -right-7 hover:font-semibold cursor-pointer flex items-center gap-2 -translate-x-3 sm:-translate-x-4"
              >
                <AiOutlineClose size={20} />
              </div>
              <div className="">
                <p className="font-medium mb-6 text-center">
                  We are here for you. Please fill <br />
                  the form below
                </p>
                <form
                  onSubmit={formik.handleSubmit}
                  className="w-full flex flex-col gap-10"
                >
                  {/* option */}
                  <div className="relative border-b border-b-black pb-2 w-full">
                    <select
                      {...formik.getFieldProps("support_type")}
                      className="bg-transparent font-semibold border-none outline-none appearance-none w-full"
                    >
                      <option value="">Options</option>
                      <option value="education">Education</option>
                      <option value="medical">Medical</option>
                      <option value="business">Busisness</option>
                      <option value="Partnership">Partnership</option>
                    </select>
                    <div className="orange-triangle-down"></div>
                  </div>
                  {/* name */}
                  <div>
                    <CustomInput
                      label="Name"
                      placeholder="full name, last name first"
                      {...formik.getFieldProps("name")}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <Error text={formik.errors.name} />
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-medium ">Gender:</p>
                    <div className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="gender"
                        id="male"
                        value={"male"}
                        //@ts-ignore
                        onChange={(e) => handleChange(e)}
                      />
                      <label htmlFor="male">Male</label>
                    </div>
                    <div className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="gender"
                        id="female"
                        value={"female"}
                        //@ts-ignore
                        onChange={(e) => handleChange(e)}
                      />
                      <label htmlFor="female">Female</label>
                    </div>
                    {formik.touched.gender && formik.errors.gender && (
                      <Error text={formik.errors.gender} />
                    )}
                  </div>
                  <div>
                    {/* phone number */}
                    <CustomInput
                      label="Phone"
                      placeholder="phone number"
                      {...formik.getFieldProps("phone")}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <Error text={formik.errors.phone} />
                    )}
                  </div>
                  {/* location */}
                  <div className="relative border-b border-b-black pb-2 w-full">
                    <select
                      placeholder="location"
                      {...formik.getFieldProps("location")}
                      className="pl-1 bg-transparent font-semibold border-none outline-none appearance-none w-full"
                    >
                      <option value="">Location</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                      <option value="America">America</option>
                      <option value="Germany">Germany</option>
                    </select>
                    <div className="orange-triangle-down"></div>
                  </div>
                  {/* message */}
                  <div>
                    <p className="mb-3 font-medium">Message </p>
                    <textarea
                      className="mt-1 resize-none shadow-md w-full outline-none border-none text-sm p-4 h-24 bg-white"
                      placeholder="Briefly tell us what is happening..."
                      {...formik.getFieldProps("message")}
                    />
                    {formik.touched.message && formik.errors.message && (
                      <Error text={formik.errors.message} />
                    )}
                  </div>
                  {/* submit button */}
                  <div className="flex items-center gap-7 mt-2">
                    <button
                      disabled={loading}
                      className="disabled:bg-opacity-50 px-12 sm:px-20 py-3 rounded-md text-white bg-[#f59134] shadow-md"
                    >
                      {loading ? (
                        <ImSpinner2
                          size={22}
                          className="mx-auto animate-spin"
                        />
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* <Footer /> */}
    </div>
  );
};

export default CaseStatus;
