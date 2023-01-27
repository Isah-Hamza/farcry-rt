import { useContext, useEffect, useState } from "react";
import DashboardSidebar from "../../components/DashboardSidebar";
import Header from "../../components/Header";

import search from "../../assets/images/search-normal-1 1.png";
import filter from "../../assets/images/Filter 1.png";
import star from "../../assets/images/star.png";
import archive from "../../assets/images/archive.png";
import deleteIcon from "../../assets/images/delete.png";
import * as Yup from "yup";

import { sidebarList } from "../../data/UserDashboard";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import { apiEndpoints, BASE_URL } from "../../config/Endpoints";
import { UsersContext } from "../../contexts/Users";
import empty from "../../assets/images/no-data.png";
import { ImSpinner2 } from "react-icons/im";
import moment from "moment";

interface IMessage {
  subject: string;
  body: string;
  createdAt: string;
  _id: string;
}

interface IAnalytics {
  totalMessages: string;
  inboxCount: string;
  sentCount: string;
  trashCount: string;
}

const Messages = () => {
  const { loggedInUser } = useContext(UsersContext);
  const [composeMsg, setComposeMsg] = useState(false);

  const [loading, setLoading] = useState(false);
  const [activeHeaderItem, setActiveHeaderItem] = useState("Inbox");
  const [allMessages, setAllMessages] = useState([]);
  const [msgToShow, setMsgToShow] = useState([] as Array<IMessage>);
  const [analytics, setAnalytics] = useState({} as IAnalytics);

  const headerItems = [
    {
      name: "Inbox",
      count: analytics?.inboxCount
    },
    {
      name: "Trash",
      count: analytics?.trashCount
    },
    {
      name: "Sent",
      count: analytics.sentCount
    }
  ];

  const handleClick = (name: string) => {
    setActiveHeaderItem(name);
    setComposeMsg(false);
  };

  const validationSchema = Yup.object().shape({
    body: Yup.string().required("required"),
    subject: Yup.string().required("required")
  });

  const formik = useFormik({
    initialValues: {
      body: "",
      subject: ""
    },
    validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      //@ts-ignore
      values.from = loggedInUser.email;
      console.log(values);
      sendMessage(values);
      formik.resetForm();
    }
  });

  async function getMessages() {
    try {
      const res = await axios.get(
        //@ts-ignore
        `${BASE_URL}/${apiEndpoints.MESSAGE}/${loggedInUser.email}`
      );
      setAllMessages(res.data.data.messages);
      setAnalytics(res.data.data.analytics);
      console.log(res.data);
    } catch (error) {
      toast.error("Error loading messages", { theme: "colored" });
    }
  }

  function sendMessage(message: Object) {
    axios
      .post(`${BASE_URL}/${apiEndpoints.MESSAGE}`, message)
      .then(() => {
        toast.success("Message sent successfully", { theme: "colored" });
        setActiveHeaderItem('sent');
        getMessages();
      })
      .catch(() => toast.error("Error sending message", { theme: "colored" }))
      .finally(() => setLoading(false));
  }

  async function updateStatus(id: string) {
    const obj = {
      location: "trash"
    };
    const msg = "Moved to trash";
    try {
      await axios.patch(`${BASE_URL}/${apiEndpoints.MESSAGE}/${id}`, obj);
      getMessages();
      toast.success(msg, { theme: "colored" });
    } catch (error) {
      toast.error("An error occured", { theme: "colored" });
    }
  }

  async function deleteMessage(id: string) {
    try {
      await axios.delete(`${BASE_URL}/${apiEndpoints.MESSAGE}/${id}`);
      getMessages();
      toast.success("Deleted successfully", { theme: "colored" });
    } catch (error) {
      toast.error("An error occured", { theme: "colored" });
    }
  }

  useEffect(() => {
    getMessages();
  }, []);

  useEffect(() => {
    const msgs = allMessages.filter(
      //@ts-ignore
      (item) => item.location === activeHeaderItem.toLowerCase()
    );
    setMsgToShow(msgs);
  }, [allMessages, activeHeaderItem]);

  useEffect(() => {
    console.log(msgToShow);
  }, [msgToShow]);

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)]">
      <Header dashboard />
      <div className="flex-1 flex">
        <DashboardSidebar sidebarList={sidebarList} />
        <main className="w-full lg:w-4/5 bg-[#DBDFEAA6] h-full pt-20 pr-10 pl-16">
          <div className="flex item-center justify-between">
            <div className="top flex gap-10">
              {headerItems.map((item, idx) => (
                <button
                  onClick={() => handleClick(item.name)}
                  key={idx}
                  className={`${
                    activeHeaderItem !== item.name && "opacity-50"
                  } flex items-center gap-2 text-sm`}
                >
                  <p className={`text-base font-semibold`}>{item.name}</p>
                  <div
                    className={`${item} shadow-md min-w-[20px] px-1 py-.5 rounded-md bg-[#ccc] text-[10px]`}
                  >
                    {item.count}
                  </div>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button>
                <img className="w-4" src={search} alt="search" />
              </button>
              <button>
                <img className="w-4" src={filter} alt="filter" />
              </button>
              <button
                onClick={() => {
                  setComposeMsg(true);
                  setActiveHeaderItem("");
                }}
                className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 transition duration-500 ease-in rounded px-6 py-2"
              >
                <img src="../../assets/images/icon-plus.svg" alt="" />
                <span className="text-sm text-white">Compose</span>
              </button>
            </div>
          </div>
          {!composeMsg ? (
            <>
              {msgToShow?.length ? (
                <div className="buttom grid mt-14">
                  {msgToShow.map((msg, idx) => (
                    <div
                      role={"button"}
                      className="msg-container inset rounded flex justify-between py-3 px-4"
                      key={idx}
                    >
                      <div className="grid grid-cols-[1fr,4fr,1fr] text-sm gap-10 flex-1">
                        <p className="font-semibold">{msg.subject}</p>
                        <p className="opacity-90">{msg.body}...</p>
                        <p className="opacity-90">
                          {moment(msg.createdAt).format("DD-MM-YYYY")}
                        </p>
                      </div>
                      <div className="flex items-center gap-6">
                        <img
                          className="w-4"
                          role={"button"}
                          src={star}
                          alt="star"
                        />
                        <img
                          className="w-4"
                          role={"button"}
                          src={archive}
                          alt="archive"
                        />
                        <img
                          onClick={() => {
                            console.log(activeHeaderItem);
                            activeHeaderItem.toLowerCase() === "trash"
                              ? deleteMessage(msg._id)
                              : updateStatus(msg._id);
                          }}
                          className="w-4"
                          role={"button"}
                          src={deleteIcon}
                          alt="deleteIcon"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 mt-24">
                  <img className="mx-auto w-40" src={empty} alt="no data" />
                  <p className="ml-8">No messages here.</p>{" "}
                </div>
              )}
            </>
          ) : (
            <form
              onSubmit={formik.handleSubmit}
              className="grid mt-10 max-w-xl"
            >
              <div className="grid">
                <p className="font-semibold">Subject</p>
                <input
                  type="text"
                  className="text-sm bg-transparent border-b border-blue-500  py-1 outline-none"
                  {...formik.getFieldProps("subject")}
                />
              </div>
              <div className="grid mt-4">
                <p className="font-semibold">Message</p>
                <textarea
                  className="text-sm bg-transparent border-b border-blue-500 py-1 outline-none h-32"
                  placeholder="Your message goes here..."
                  {...formik.getFieldProps("body")}
                ></textarea>
              </div>
              <button
                disabled={!formik.isValid || loading}
                type="submit"
                className="disabled:bg-opacity-50 min-w-[100px] w-fit mt-6 text-sm px-9 py-2 rounded bg-blue-500 text-white"
              >
                {loading ? (
                  <ImSpinner2 className="mx-auto animate-spin " size={20} />
                ) : (
                  "Send"
                )}
              </button>
            </form>
          )}
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Messages;
