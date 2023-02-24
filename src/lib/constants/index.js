import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "fieldagents",
    label: "Field Agents",
    path: "/field-agents",
    icon: <HiOutlineCube />,
  },
  {
    key: "engagements",
    label: "Engagements",
    path: "/engagements",
    icon: <HiOutlineUsers />,
  },
  {
    key: "enumeration",
    label: "Enumeration",
    path: "/enumeration",
    icon: <HiOutlineUsers />,
  },
  {
    key: "transactions",
    label: "Influencer",
    path: "/transactions",
    icon: <HiOutlineDocumentText />,
  },
  {
    key: "cluster",
    label: "Cluster",
    path: "/cluster",
    icon: <HiOutlineAnnotation />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
