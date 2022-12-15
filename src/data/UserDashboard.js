import profile from "../assets/images/profile.png";
import caseStudy from "../assets/images/case study.png";
import report from "../assets/images/report.png";
import messages from "../assets/images/messages.png";
import donate from "../assets/images/donate.png";
import settings from "../assets/images/settings.png";
import support from "../assets/images/support.png";
import logout from "../assets/images/log-out.png";

export const sidebarList = [
  {
    title: "profile",
    icon: (
      <img className="w-4 h-4 object-contain" src={profile} alt="profile" />
    ),
    url: "/profile",
  },
  {
    title: "report",
    icon: <img className="w-4 h-4 object-contain" src={report} alt="report" />,
    url: "",
  },
  {
    title: "case study",
    icon: (
      <img
        className="w-4 h-4 object-contain"
        src={caseStudy}
        alt="case study"
      />
    ),
    url: "",
  },
  {
    title: "messages",
    icon: (
      <img className="w-4 h-4 object-contain" src={messages} alt="messages" />
    ),
    url: "/messages",
  },
  {
    title: "Donate",
    icon: <img className="w-4 h-4 object-contain" src={donate} alt="donate" />,
    url: "",
  },
  {
    title: "settings",
    icon: (
      <img className="w-4 h-4 object-contain" src={settings} alt="settings" />
    ),
  },
  {
    title: "support",
    icon: (
      <img className="w-4 h-4 object-contain" src={support} alt="support" />
    ),
    url: "",
  },
  {
    title: "logout",
    icon: <img className="w-4 h-4 object-contain" src={logout} alt="logout" />,
    url: "",
  },
];
