import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Auth";
import { Dashboard } from "../pages/Others";
import Layout from "../components/Layouts";

import {
  AllFieldAgents,
  AddFieldAgents,
  PendingFieldAgents,
} from "../pages/FieldAgent";
import {
  EngagementHome,
  EngagementDetails,
  CreateEngagement,
  PendingEngagement,
} from "../pages/Engagement";
import EngagementAttendees  from "../pages/Engagement/EngagementDetails/EngagementAttendees";
import {
  FarmerDetails,
  AttendeeDetails,
  EnumerationHome,
  AllAttendees,
  AllFarmers,
  OngoingEnumeration,
} from "../pages/Enumeration";
import Cluster from "../pages/Cluster";
import Influencer from "../pages/Influencer";
// import AttendeeDetails from "../pages/Enumeration/AllAttendees/AttendeeDetails";
import EnumerationStatistic from "../pages/Enumeration/EnumerationHome/EnumerationStatistic"
// import EngagementDetails from "../pages/Engagement/EngagementHome/EngagementDetails";
const AdminRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/field-agents" element={<AllFieldAgents />} />
          <Route path="/add-agents" element={<AddFieldAgents />} />
          <Route path="/pending-agents" element={<PendingFieldAgents />} />
          <Route path="/engagements" element={<EngagementHome />} />
          <Route path="/engagement/details" element={<EngagementDetails />} />
          <Route path="/engagement/details/attendees" element={<EngagementAttendees />} />
          <Route path="/create-engagement" element={<CreateEngagement />} />
          <Route path="/pending-engagement" element={<PendingEngagement />} />
          <Route path="/enumeration" element={<EnumerationHome />} />
          <Route path="/all-attendees" element={<AllAttendees />} />
          <Route path="/attendee-details" element={<AttendeeDetails />} />
          <Route path="/ongoing-enumeration" element={<OngoingEnumeration />} />
          <Route path="/all-farmers" element={<AllFarmers />} />
          <Route path="/farmer-details" element={<FarmerDetails />} />
          <Route path="/cluster" element={<Cluster />} />
          <Route path="/influencer" element={<Influencer />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AdminRoutes;
