import { useState } from "react";

import Footer from "../components/Footer";
import contactUs from "../assets/images/contact-us.png";
import NewsLetter from "../components/NewsLetter";
import SwiperComponent from "../components/Swiper";
import { BiArrowBack } from "react-icons/bi";
import * as Yup from "yup";
import { useFormik } from "formik";
import { CustomInput, Error } from "./Emergency";
import axios from "axios";
import { apiEndpoints, BASE_URL } from "../config/Endpoints";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

const Support = () => {
  const [getSupport, setGetSupport] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      email: "",
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
      requestSupport(values);
    }
  });

  async function requestSupport(data: Object) {
    setLoading(true);
    try {
      await axios
        .post(`${BASE_URL}/${apiEndpoints.SUPPORT}`, data)
        .then(() => navigate("/success"));
    } catch (error) {
      toast.error("Problem requesting for a support. Please try again", {
        theme: "colored"
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="w-full relative">
        <img
          className="w-full h-60 sm:h-96 md:h-[500px] object-cover object-center"
          src={contactUs}
          alt=""
        />
        <p className="text-3xl whitespace-nowrap text-gold font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Get Support Today
        </p>
      </div>
      <section className=" px-[5%] mt-16 mb-20">
        <div>
          <p className="text-gold mb-3 font-semibold">Need Support?</p>
          {getSupport ? (
            <p className="font-bold text-xl">Support Form</p>
          ) : (
            <p className="font-bold text-xl">Our Support System</p>
          )}
        </div>
        {getSupport === false ? (
          <div className="grid md:grid-cols-3 gap-5 lg:gap-10 mt-10">
            <div className=" flex flex-col bg-[#d9daff]">
              <div className="border-b p-5 px-8">
                <p className="text-xl font-semibold mb-4">Support</p>
                <p className="mb-2">
                  our support Groups serves as save space you.
                </p>
                <p>
                  Reach out so as to connect or share and get help with what is
                  bordering you today
                </p>
              </div>
              <div className="flex flex-1 h-fi px-8 items-end">
                <button
                  onClick={() => setGetSupport(true)}
                  className="my-5 w-fit mr-auto ml-[unset] px-10 py-[10px] rounded-md text-white bg-gold "
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className=" flex flex-col bg-[#d9daff]">
              <div className="border-b p-5 px-8">
                <p className="text-xl font-semibold mb-4">Get Educated</p>
                <p>
                  this is to help by providing assistance needed for person
                  within Nigeria that were displaced due to War or Natural
                  disaster
                </p>
              </div>
              <div className="flex flex-1 h-fit px-8 items-end">
                <button
                  onClick={() => setGetSupport(true)}
                  className=" my-5 w-fit mr-auto ml-[unset] px-10 py-[10px] rounded-md text-white bg-gold "
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className=" flex flex-col bg-[#d9daff]">
              <div className="border-b p-5 px-8">
                <p className="text-xl font-semibold mb-4">Get Educated</p>
                <p>
                  this is to help by providing assistance needed for person
                  within Nigeria that were displaced due to War or Natural
                  disaster
                </p>
              </div>
              <div className="flex flex-1 h-fit px-8 items-end">
                <button
                  onClick={() => setGetSupport(true)}
                  className=" my-5 w-fit mr-auto ml-[unset] px-10 py-[10px] rounded-md text-white bg-gold "
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative sm:w-[500px] lg:w-[700px] mx-auto bg-[#f5f6fa] bg-opacity-75 px-5 !py-16 sm:p-10 mt-10">
            <div
              onClick={() => setGetSupport(false)}
              className="absolute top-5 left-6 sm:left-1/2 lg:left-16 hover:font-semibold cursor-pointer flex items-center gap-2 -translate-x-3 sm:-translate-x-4"
            >
              <BiArrowBack />
              <span>Go back</span>
            </div>
            <div className="sm:w-[450px] mt-10 mx-auto">
              <p className="font-medium mb-16 text-center">
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
                <div>
                  <CustomInput
                    label="Email"
                    placeholder="email address"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <Error text={formik.errors.email} />
                  )}
                </div>
                {/* gender */}
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
                    className="mt-1 resize-none shadow-md w-full outline-none border-none text-sm p-4 h-40 bg-white"
                    placeholder="Briefly tell us what is happening..."
                    {...formik.getFieldProps("message")}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <Error text={formik.errors.message} />
                  )}
                </div>
                {/* submit button */}
                <div className="flex items-center gap-7 mt-7">
                  <button
                    disabled={loading}
                    className="disabled:bg-opacity-50 px-12 sm:px-20 py-3 rounded-md text-white bg-[#f59134] shadow-md"
                  >
                    {loading ? (
                      <ImSpinner2 size={22} className="mx-auto animate-spin" />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
      {getSupport === false && (
        <div className="mt-24">
          <div className="text-center">
            <p className="text-2xl mb-2 font-bold">Testimonies</p>
            <p>
              see what people who have trusted us over the years are{" "}
              <br className="hidden sm:block" /> saying.
            </p>
          </div>
          <div className="pt-20 pb-14 overflow-x-hidden px-3 mt-14 bg-[#fbfbff]">
            <SwiperComponent />
          </div>
        </div>
      )}
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Support;
