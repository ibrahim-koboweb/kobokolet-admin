import {
  HiOutlineViewGrid,
  HiOutlineUsers,
  HiOutlineQuestionMarkCircle,

} from "react-icons/hi";
import {
  HiOutlineDocumentText,
  HiOutlineDocumentCheck
} from "react-icons/hi2";
import {MdOutlineCircle} from 'react-icons/md'
import {BiHive} from 'react-icons/bi'
import {RiUserStarLine} from 'react-icons/ri'


export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
    dropdown: false,
  },
  {
    key: "fieldagents",
    label: "Field Agents",
    path: "#",
    icon: <HiOutlineUsers />,
    dropdown: [
      {
        key: "allfieldagents",
        label: "All Field Agents",
        path: "/field-agents",
        icon: <MdOutlineCircle />,
      },
      {
        key: "addfieldagents",
        label: "Add Field Agents",
        path: "/add-agents",
        icon: <MdOutlineCircle />,
      },
      {
        key: "pendingagentrequest",
        label: "Pending Agents Request",
        path: "/pending-agents",
        icon: <MdOutlineCircle />,
      },
    ],
  },
  {
    key: "engagements",
    label: "Engagements",
    path: "#",
    icon: <HiOutlineDocumentText />,
    dropdown: [
      {
        key: "allengagements",
        label: "All Engagements",
        path: "/engagements",
        icon: <MdOutlineCircle />,
      },
      {
        key: "createengagement",
        label: "Create Engagement",
        path: "/create-engagement",
        icon: <MdOutlineCircle />,
      },
      {
        key: "pendingengagement",
        label: "Pending Engagement",
        path: "/pending-engagement",
        icon: <MdOutlineCircle />,
      },
    ],
  },
  {
    key: "enumeration",
    label: "Enumeration",
    path: "#",
    icon: <HiOutlineDocumentCheck />,
    dropdown: [
      {
        key: "enumerationhome",
        label: "Enumeration Dashboard",
        path: "/enumeration",
        icon: <MdOutlineCircle />,
      },
      {
        key: "allattendees",
        label: "All Attendees",
        path: "/all-attendees",
        icon: <MdOutlineCircle />,
      },
      {
        key: "ongoingenumeration",
        label: "Ongoing Enumeration",
        path: "/ongoing-enumeration",
        icon: <MdOutlineCircle />,
      },
      {
        key: "allfarmers",
        label: "All Farmers",
        path: "/all-farmers",
        icon: <MdOutlineCircle />,
      },
    ],
  },
  {
    key: "cluster",
    label: "Cluster",
    path: "/cluster",
    icon: <BiHive />,
    dropdown: [
      {
        key: "allcluster",
        label: "All Cluster",
        path: "/cluster",
        icon: <MdOutlineCircle />,
      },
      {
        key: "addcluster",
        label: "Add Cluster",
        path: "/cluster/create",
        icon: <MdOutlineCircle />,
      },
    ],
  },
  {
    key: "influencer",
    label: "Influencer",
    path: "/influencer",
    icon: <RiUserStarLine />,
    dropdown: false,
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
