import Footer from "../components/Footer";

import contactUs from "../assets/images/contact-us.png";
import { ImFacebook, ImSpinner2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import NewsLetter from "../components/NewsLetter";
import { FormEvent, useRef } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

import emailJs from "@emailjs/browser";
import { useFormik, validateYupSchema } from "formik";
import { Error } from "./Emergency";

const ContactUs = () => {
  const formRef = useRef<HTMLElement>(null);
  const serviceId = "service_vap4zkv";
  const templateId = "template_qgzzj7s";
  const publicKey = "jBKmQQoinQiDr4P_i";
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name field is required"),
    email: Yup.string().required("Eamil field is required"),
    message: Yup.string().required("Message field is required")
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validationSchema,
    onSubmit() {
      sendMail();
      formik.resetForm();
    }
  });

  const sendMail = (e?: FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    emailJs
      //@ts-ignore
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((res) => {
        toast.success("Message sent successful", { theme: "colored" });
      })
      .catch((err) => {
        toast.error("Message not sent " + err.message, { theme: "colored" });
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="w-full relative">
        <img
          className="w-full h-60 sm:h-96 md:h-[500px] object-cover object-center"
          src={contactUs}
          alt=""
        />
        <p className="text-3xl text-gold font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Contact Us
        </p>
      </div>
      <section className="grid md:grid-cols-2 gap-10 px-[5%] mt-16 mb-20">
        <div className="">
          <div className="ml-0 sm:ml-10 md:ml-20 tracking-wide">
            <p className="text-gold font-semibold">How Can You Contact Us?</p>
            <p className="font-bold text-2xl my-3">Contacting Us Made Easy</p>
            <p className="mb-5">
              For Enquiries, Partnership and Donations{" "}
              <br className="hidden sm:block" />
              please do reach us via our various{" "}
              <br className="hidden sm:block" />
              channels.
            </p>
            <div className="flex gap-2">
              <p className="font-semibold">Phone:</p>
              <div>
                <p>+234-7067538138</p>
                <p>+234-8081249833</p>
              </div>
            </div>
            <p className="my-5">
              <span className="font-semibold">Email:</span> cvsupport@farcry.ng
            </p>
            <p>
              <span className="font-semibold">Visit us:</span> No, 2 suleimansyd
              crecent, Ankpa, <br className="hidden sm:block" />
              942 avenue Minna , Nigeria.
            </p>
            <div className="mt-5">
              <p className="mb-3 font-semibold">Follow us on:</p>
              <div className="flex gap-x-4 ">
                <a href="#">
                  {" "}
                  <ImFacebook color="coral" size={22} />{" "}
                </a>
                <a href="#">
                  {" "}
                  <FaTwitter color="coral" size={22} />{" "}
                </a>
                <a href="#">
                  {" "}
                  <FiInstagram color="coral" size={22} />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <form
          // @ts-ignore
          ref={formRef}
          onSubmit={formik.handleSubmit}
          className="bg-[#D7D7DF] bg-opacity-70 px-5 md:px-10 p-10 flex flex-col gap-3"
        >
          <p className="font-bold text-2xl mb-10">Get in Touch </p>
          <div>
            <div className="flex items-end gap-3 mb-10 border-b border-b-black pb-2 mt-3">
              <label className="text-sm font-medium" htmlFor="name">
                Name:
              </label>
              <input
                {...formik.getFieldProps("name")}
                className="bg-transparent w-full outline-none border-none pl-4"
                type="text"
                placeholder="Your fullname, lastname first"
              />
            </div>
            <div className="-mt-10">
              {formik.touched.name && formik.errors.name && (
                <Error text={formik.errors.name} />
              )}
            </div>
          </div>
          <div>
            <div className="flex items-end gap-3 mb-10 border-b border-b-black pb-2 mt-3">
              <label className="text-sm font-medium" htmlFor="email">
                Email:
              </label>
              <input
                {...formik.getFieldProps("email")}
                className="bg-transparent w-full outline-none border-none pl-4"
                type="email"
                name="email"
                placeholder="Your email here"
              />
            </div>
            <div className="-mt-10">
              {formik.touched.email && formik.errors.email && (
                <Error text={formik.errors.email} />
              )}
            </div>
          </div>
          <div className="mt-3">
            <div className="">
              <label className="font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                {...formik.getFieldProps("message")}
                className="mt-1 resize-none shadow-md w-full outline-none border-none text-sm p-4 h-32 bg-white"
                placeholder="Type in your message here..."
              />
            </div>
            <div className="-mt-1">
              {formik.touched.message && formik.errors.message && (
                <Error text={formik.errors.message} />
              )}
            </div>
          </div>
          <button
            disabled={loading}
            type="submit"
            className=" disabled:bg-opacity-50 hover:shadow-inner mt-10 px-12 sm:px-16 py-3 rounded-md text-white bg-[#f59134] shadow-xl"
          >
            {loading ? (
              <ImSpinner2 className="animate-spin mx-auto" size={22} />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </section>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default ContactUs;
