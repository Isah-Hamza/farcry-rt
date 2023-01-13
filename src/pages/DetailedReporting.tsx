import { useState } from "react";
import handshake from "../assets/images/handshake.png";
import { MdOutlineAttachment } from "react-icons/md";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import * as Yup from "yup";
import { useFormik } from "formik";
import { CustomInput, Error } from "./Emergency";
import { apiEndpoints, BASE_URL } from "../config/Endpoints";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

const DetailedReporting = () => {
  const [spoken, setSpoken] = useState("");
  const [certify, setCertify] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name_victim: Yup.string().required("Please enter name of the victim"),
    phone_victim: Yup.string().required("Please enter victim's phone number"),
    age: Yup.string().required("Please enter age of victim"),
    gender: Yup.string(),
    marital_status: Yup.string(),
    occupation: Yup.string(),
    name_reporter: Yup.string().required("Please your name"),
    email_reporter: Yup.string().required("Please your email"),
    address_reporter: Yup.string().required("Please your address"),
    phone_reporter: Yup.string().required("Please enter your phone number"),
    message: Yup.string().required(
      "Please type a note here for the recepient organization"
    )
  });

  const formik = useFormik({
    initialValues: {
      reporting_type: "detailed reporting",
      name_victim: "",
      phone_victim: "",
      age: "",
      gender: "",
      marital_status: "",
      occupation: "",
      name_reporter: "",
      phone_reporter: "",
      email_reporter: "",
      address_reporter: "",
      spoken_to_someone: "no",
      message: ""
    },
    validationSchema,
    onSubmit(values) {
      console.log(values);
      makeReport(values);
    }
  });

  const handleChange = (e: Event) => {
    //@ts-ignore
    formik.setFieldValue("gender", e.target?.value);
  };

  async function makeReport(data: Object) {
    setLoading(true);
    try {
      await axios
        .post(`${BASE_URL}/${apiEndpoints.REPORT}`, data)
        .then(() => navigate("/success"));
    } catch (error) {
      toast.error("Problem submitting report. Please try again");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="w-full relative">
          <img
            src={handshake}
            className="h-[250px] sm:h-[unset] object-cover"
            alt="handshake"
          />
          <p className="font-bold text-white text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Report
          </p>
        </div>
        <div className="w-full  bg-[rgba(0,6,255,.15)]  py-16">
          <div className="sm-w-[90%] md:w-[600px] lg:w-[800px] mx-auto">
            <div className="">
              <p className="text-center mb-5 font-medium text-base">
                Giving you all the support needed to overcome your current
                situation <br className="hidden sm:block" /> is our major
                priority
              </p>
              <p className="text-sm text-center">
                We are here for you. Please fill the form below:
              </p>
              <form
                onSubmit={formik.handleSubmit}
                className="sm:w-[500px] lg:w-[700px] mx-auto bg-white bg-opacity-75 px-5 !py-16 sm:p-10 mt-10"
              >
                <div className="sm:w-[350px] mx-auto">
                  <section className="flex flex-col gap-5">
                    <p className="text-xl font-bold mb-10 text-[orange]">
                      Victim's Information
                    </p>
                    <div>
                      <CustomInput
                        label="Name"
                        placeholder="full name, last name first"
                        {...formik.getFieldProps("name_victim")}
                      />
                      {formik.touched.name_victim &&
                        formik.errors.name_victim && (
                          <Error text={formik.errors.name_victim} />
                        )}
                    </div>
                    <div>
                      <CustomInput
                        label="Phone"
                        placeholder="phone number"
                        {...formik.getFieldProps("phone_victim")}
                      />
                      {formik.touched.phone_victim &&
                        formik.errors.phone_victim && (
                          <Error text={formik.errors.phone_victim} />
                        )}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-10 mt-2 text-sm">
                      <div className="relative border-b border-b-black pb-2 w-60">
                        <select
                          {...formik.getFieldProps("age")}
                          className="bg-transparent  border-none outline-none appearance-none w-full"
                        >
                          <option value="">Your Age</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                        </select>
                        <div className="orange-triangle-down"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium mr-5">Gender:</p>
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
                            value={"female"}
                            id="female"
                            //@ts-ignore
                            onChange={(e) => handleChange(e)}
                          />
                          <label htmlFor="female">Female</label>
                        </div>
                      </div>
                    </div>
                    {/* <div className="flex items-end gap-3 border-b border-b-black pb-2 mt-10 sm:w-[200px]">
                      <label className="text-sm font-medium" htmlFor="status">
                        Status:
                      </label>
                      <input
                        id="status"
                        name="status"
                        className="bg-transparent w-full outline-none border-none "
                        type="text"
                        placeholder="Your status here"
                      />
                    </div> */}
                    <div className="relative border-b border-b-black pb-2 sm:w-[200px] mt-1">
                      <select
                        {...formik.getFieldProps("marital_status")}
                        className="bg-transparent font-medium text-sm border-none outline-none appearance-none w-full"
                      >
                        <option value="">Marital Status</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="divorced">Divorced</option>
                      </select>
                      <div className="orange-triangle-down"></div>
                    </div>
                    <div className="relative border-b border-b-black pb-2 sm:w-[200px] mt-1">
                      <select
                        placeholder="occupation"
                        {...formik.getFieldProps("occupation")}
                        className="bg-transparent font-medium text-sm border-none outline-none appearance-none w-full"
                      >
                        <option value="">Occupation</option>
                        <option value="student">student</option>
                        <option value="civil servant">civil servant</option>
                        <option value="office holder">office holder</option>
                      </select>
                      <div className="orange-triangle-down"></div>
                    </div>
                  </section>
                  <section className="mt-10 text-sm flex flex-col gap-5">
                    <p className="text-[orange] font-semibold text-base">
                      Person making the conplaints
                    </p>
                    <div>
                      <CustomInput
                        label="Name"
                        placeholder="full name, last name first"
                        {...formik.getFieldProps("name_reporter")}
                      />
                      {formik.touched.name_reporter &&
                        formik.errors.name_reporter && (
                          <Error text={formik.errors.name_reporter} />
                        )}
                    </div>
                    <div>
                      <CustomInput
                        label="Phone"
                        placeholder="phone number"
                        {...formik.getFieldProps("phone_reporter")}
                      />
                      {formik.touched.phone_reporter &&
                        formik.errors.phone_reporter && (
                          <Error text={formik.errors.phone_reporter} />
                        )}
                    </div>
                    <div>
                      <CustomInput
                        label="Email"
                        placeholder="email address"
                        {...formik.getFieldProps("email_reporter")}
                      />
                      {formik.touched.email_reporter &&
                        formik.errors.email_reporter && (
                          <Error text={formik.errors.email_reporter} />
                        )}
                    </div>
                    <div>
                      <CustomInput
                        label="Address"
                        placeholder="your address"
                        {...formik.getFieldProps("address_reporter")}
                      />
                      {formik.touched.address_reporter &&
                        formik.errors.address_reporter && (
                          <Error text={formik.errors.address_reporter} />
                        )}
                    </div>
                    <div className="">
                      <p>Have you spoken to anyone yet? </p>
                      <div className="flex gap-10 items-center mt-3">
                        <div
                          onClick={() => {
                            setSpoken("yes");
                            formik.setFieldValue("spoken_to_someone", "yes");
                          }}
                          className="cursor-pointer flex gap-2 items-center "
                        >
                          <div
                            className={`${
                              spoken === "yes" && "bg-[orange]"
                            } w-[10px] h-[10px] border-2 border-[orange]`}
                          ></div>
                          <p>Yes</p>
                        </div>
                        <div
                          onClick={() => {
                            setSpoken("no");
                            formik.setFieldValue("spoken_to_someone", "no");
                          }}
                          className="cursor-pointer flex gap-2 items-center "
                        >
                          <div
                            className={`${
                              spoken === "no" && "bg-[orange]"
                            } w-[10px] h-[10px] border-2 border-[orange]`}
                          ></div>
                          <p>No</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-[orange] text-base font-medium mt-5">
                      Statement of complaint
                    </p>
                    <p className="">
                      Please provide as much detailed information about the
                      crime and also attach document when necessary{" "}
                    </p>
                    <textarea
                      className="mt-1 resize-none shadow-md w-full outline-none border-none text-sm p-4 h-32 bg-white"
                      placeholder="Briefly tell us what is happening..."
                      {...formik.getFieldProps("message")}
                    />
                    {formik.touched.message && formik.errors.message && (
                      <Error text={formik.errors.message} />
                    )}
                    <div className="flex gap-5 mt-4">
                      <div
                        onClick={() => setCertify(!certify)}
                        className="cursor-pointer flex gap-2 items-center "
                      >
                        <div
                          className={`${
                            certify && "bg-[orange]"
                          } w-[10px] h-[10px] border-2 border-[orange]`}
                        ></div>
                        <p className="text-xs sm:text-sm">
                          I certify that all information provided therein are
                          true
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-7 mt-7">
                      <button
                        disabled={loading}
                        type="submit"
                        className="disabled:bg-opacity-50 px-12 sm:px-20 py-3 rounded-md text-white bg-[#f59134] shadow-md"
                      >
                        {loading ? (
                          <ImSpinner2
                            className="mx-auto animate-spin"
                            size={22}
                          />
                        ) : (
                          "Submit"
                        )}
                      </button>
                      <input type="file" id="select_file" hidden />
                      <label
                        className="mr-4 sm:mr-[unset]"
                        htmlFor="select_file"
                        role="button"
                      >
                        <div className="text-sm flex items-center gap-1">
                          <MdOutlineAttachment size={20} />
                          <span>Attach a file</span>
                        </div>
                      </label>
                    </div>
                  </section>
                </div>
              </form>
              <div>
                <NewsLetter />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailedReporting;
