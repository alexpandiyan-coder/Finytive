import Dashboard from "./svg/Dashboard-cuate.svg";
import Location from "./svg/Location tracking-rafiki.svg";
import Login from "./svg/Location review-pana.svg";
import Report from "./svg/Report-cuate.svg";
import Receipt from "./svg/itcpc/Receipt-cuate.svg";
import dataImage from "./svg/itcpc/dataImage.svg";
import Business from "./svg/itcpc/Business.svg";
import Server from "./svg/itcpc/Server-pana.svg";
import Interaction from "./svg/Interaction Design-amico.svg";
import CustomCRM from "./svg/crm/Customer relationship management-pana.svg";
import Mobile from "./svg/crm/MobileSupport.svg";
import Support from "./svg/crm/Support.svg";
import face from "./svg/TAM_1-BQrjPs_T.png";

import {
  FaUserCircle,
  FaMapMarkedAlt,
  FaClock,
  FaUserFriends,
  FaChartBar,
  FaCheck,
  FaUserCheck,
  FaLaptop,
  FaCalendarAlt,
  FaBullseye,
} from "react-icons/fa";
export const productData = {
  crm: {
    title: "Finytive CRM",
    description:
      "A complete CRM to manage leads, automate tasks, and boost your sales productivity.",
    features: [
      {
        title: "Real-time Analytics",
        icon: <FaChartBar className="feature-icon" />,
        image: Dashboard,
        descriptions: [
          "Comprehensive sales performance metrics",
          "Real-time dashboard with key indicators",
          "Customizable reporting tools",
        ],
      },
      {
        title: "Custom Dashboard",
        icon: <FaUserCircle className="feature-icon" />,
        image: CustomCRM,
        descriptions: [
          "Personalized dashboard layouts",
          "Drag-and-drop widget configuration",
          "Role-based dashboard views",
        ],
      },
      {
        title: "Mobile Support",
        icon: <FaMapMarkedAlt className="feature-icon" />,
        image: Mobile,
        descriptions: [
          "Native mobile applications",
          "Offline data synchronization",
          "Push notifications for updates",
        ],
      },
      {
        title: "24/7 Support",
        icon: <FaUserFriends className="feature-icon" />,
        image: Support,
        descriptions: [
          "Round-the-clock customer support",
          "Multi-channel support options",
          "Knowledge base and documentation",
        ],
      },
    ],
  },
  tickora: {
    title: "Tickora - Time Management System",
    title2: "Welcome to Your Smart Attendance Management System",
    description: `Say goodbye to outdated manual attendance systems and step into a new era of seamless,
secure, and accurate attendance tracking. Powered by Face Recognition and Geo-Fencing
Technology, this solution ensures that every attendance record is captured effortlessly and
with pinpoint accuracy—no more missed punches or manual errors.
Designed with schools, colleges, training institutes, and educational organizations in mind,
this user-friendly application is the ultimate time management system for the modern
learning environment. Manage attendance, track history, and generate insights—all from one
powerful and intuitive platform.
Stay ahead of the curve and simplify attendance tracking for your institution. Because managing
time should be simple, not stressful`,
    features: [
      {
        title: "Face Recognition-Based Attendance ",
        icon: <FaUserCheck className="feature-icon" />,
        image: face,
        descriptions: [
          "Ensure 100% Accuracy Achieve unmatched precision through advanced technology",
          "Advanced Facial Recognition Leverage cutting-edge facial mapping to detect, analyze, and verify faces instantly",
          "AI-Powered Engine Seamlessly powered by intelligent algorithms for speed and security",
        ],
      },
      {
        title: "Geo-Fencing Integration",
        icon: <FaMapMarkedAlt className="feature-icon" />,
        image: Location,
        descriptions: [
          "Attendance is allowed only within the campus boundary using GPS",
          "The system verifies real-time location before marking attendance",
          "Attendance outside designated zones is automatically blocked",
        ],
      },
      {
        title: "Real-Time Attendance Logs",
        icon: <FaClock className="feature-icon" />,
        image: Login,
        descriptions: [
          "Track attendance in real-time from anywhere",
          "Instantly view daily, weekly, or monthly records",
          "Access attendance summaries with just a tap",
        ],
      },
      {
        title: "User-Friendly Interface",
        icon: <FaLaptop className="feature-icon" />,
        image: Interaction,
        descriptions: [
          "User-friendly design for teachers, students, and admins",
          "Seamless access on both web and mobile platforms",
          "Easy navigation for a smooth attendance experience",
        ],
      },
      {
        title: "Attendance History & Reports",
        icon: <FaChartBar className="feature-icon" />,
        image: Report,
        descriptions: [
          "Generate detailed reports by individual, class, or department",
          "Export attendance data easily for analysis",
          "Keep accurate records with downloadable reports",
        ],
      },
      {
        title: "Smart Time Management",
        icon: <FaCalendarAlt className="feature-icon" />,
        image: Business,
        descriptions: [
          "Reduce manual attendance tasks effortlessly",
          "Save valuable time for teachers and staff",
          "Focus more on teaching and learning outcomes",
        ],
      },
    ],
  },
  itcpc: {
    title: "ITCPC – Smart Auction Management",
    title2:
      "Welcome to the future of auction management – efficient, transparent, and made for success",
    description: `Say goodbye to tedious, manual auction processes and step into the future of smart, seamless,
and efficient auction management.
ITCPC is your all-in-one platform for automated bill generation, real-time auction tracking,
and powerful data analysis – designed to make your spices auction workflow faster, more
transparent.
Whether you’re managing small lots or large-scale auctions, ITCPC empowers you with tools to
eliminate errors, improve accuracy, and make confident, data-driven decisions.
With an intuitive interface and smooth operations, ITCPC turns complex auction management
into a simple, streamlined experience.`,
    features: [
      {
        title: "Simplified Bill Generation",
        icon: <FaChartBar className="feature-icon" />,
        image: Receipt,
        descriptions: [
          "Generate bills quickly with minimal effort",
          "Automate fee calculations and invoicing",
          "Reduce errors with streamlined billing processes",
        ],
      },
      {
        title: "Comprehensive Data Management",
        icon: <FaClock className="feature-icon" />,
        image: Server,
        descriptions: [
          "Store and manage all student and staff data in one place",
          "Access academic, attendance, and fee records instantly",
          "Ensure data accuracy with organized digital records",
        ],
      },
      {
        title: "Auction Status Monitoring",
        icon: <FaUserCircle className="feature-icon" />,
        image: Business,
        descriptions: [
          "Track live auction progress in real-time",
          "Monitor bids, timings, and participant activity",
          "Get instant updates on auction status and results",
        ],
      },
      {
        title: "Powerful Reporting & Analysis",
        icon: <FaChartBar className="feature-icon" />,
        image: dataImage,
        descriptions: [
          "Generate insightful reports with a single click",
          "Analyze trends across students, classes, or departments",
          "Make data-driven decisions with detailed analytics",
        ],
      },
      {
        title: "User-Friendly Interface",
        icon: <FaChartBar className="feature-icon" />,
        image: Interaction,
        descriptions: [
          "Easy to navigate for all user types",
          "Clean and intuitive design for smooth usage",
          "Requires minimal training to get started",
        ],
      },
    ],
  },
};
