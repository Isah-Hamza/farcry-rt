import handshake from "../assets/images/handshake.png";
import { MdOutlineAttachment } from "react-icons/md";
import Footer from "../components/Footer";
import * as Yup from "yup";
import { useFormik } from "formik";

interface CustomInputProps {
  type?: "text" | "password";
  label: string;
  placeholder?: string;
}

interface ErrorProps {
  text: string;
}

const CustomInput = ({
  type,
  label,
  placeholder,
  ...rest
}: CustomInputProps) => {
  return (
    <div className="flex items-end gap-3 border-b border-b-black pb-2 mt-5">
      <label className="text-sm font-medium" htmlFor="name">
        {label}
      </label>
      <input
        className="bg-transparent w-full outline-none border-none pl-4"
        type={type ?? "text"}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

const Error = ({ text }: ErrorProps) => (
  <span className="text-[coral] text-xs">{text}</span>
);

const Emergency = () => {
  const validationSchema = Yup.object().shape({});

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      location: "",
      email: "",
      gender: "",
      message: ""
    },
    validationSchema,
    onSubmit(values) {
      console.log(values);
    }
  });

  return (
    <>
      <div className="w-full flex flex-col relative">
        <div className="w-full">
          <img
            src={handshake}
            className="h-[250px] sm:h-[unset] object-cover"
          />
        </div>
        <div className="w-full h-[600px] bg-[#e5e5e5]"></div>
        <form
          onSubmit={formik.handleSubmit}
          className="absolute top-1 left-1/2 -translate-x-1/2 w-[90%] sm:w-[unset] md:w-[700px] bg-white bg-opacity-60 px-5 py-10 sm:p-10"
        >
          <h2 className="text-2xl font-bold text-center">Emergency</h2>
          <p className="text-center">
            We are here for you. Please fill the form below
          </p>
          <div className="flex flex-col gap-5 mt-10 sm:w-[400px] mx-auto">
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
                label="Phone"
                placeholder="phone number"
                {...formik.getFieldProps("phone")}
              />
              {formik.touched.phone && formik.errors.phone && (
                <Error text={formik.errors.phone} />
              )}
            </div>
            <div>
              <CustomInput
                label="Email"
                placeholder="Email address"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <Error text={formik.errors.email} />
              )}
            </div>
            <div>
              <CustomInput
                label="Location"
                placeholder="your location"
                {...formik.getFieldProps("location")}
              />
              {formik.touched.location && formik.errors.location && (
                <Error text={formik.errors.location} />
              )}
            </div>
            <div className="flex items-center gap-2">
              <p className="font-medium mr-5">Gender:</p>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="male"
                  {...formik.getFieldProps("gender")}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="female"
                  {...formik.getFieldProps("gender")}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
            <div className="">
              <label className="font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="mt-1 resize-none shadow-md w-full outline-none border-none text-sm p-4 h-32 bg-white"
                placeholder="Briefly tell us what is happening..."
                {...formik.getFieldProps("message")}
              />
            </div>
            <div className="flex items-center gap-7">
              <button
                type="submit"
                className="px-12 sm:px-16 py-3 rounded-md text-white bg-[#f59134] shadow-md"
              >
                Submit
              </button>
              <input type="file" id="select_file" hidden />
              <label
                className="mr-4 sm:mr-[unset]"
                htmlFor="select_file"
                role="button"
              >
                <div className="text-sm flex items-center gap-1">
                  <MdOutlineAttachment size={20} />
                  <span>Attach file</span>
                </div>
              </label>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Emergency;
