import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Auth";
import { Dashboard } from "../pages/Others";
import Layout from "../components/Layouts";

import { FieldAgentLists, AddFieldAgents, PendingFieldAgents, ApprovedFieldAgents, RejectedFieldAgents } from "../pages/FieldAgent";
import  { EngagementHome, CreateEngagement, PendingEngagement} from "../pages/Engagement";
import { AllAttendees, AllFarmers, OngoingEnumeration } from "../pages/Enumeration";
import Cluster from "../pages/Cluster";
import Influencer from "../pages/Influencer";


const AdminRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/field-agents" element={<FieldAgentLists />} />
          <Route path="/add-agents" element={<AddFieldAgents />} />
          <Route path="/pending-agents" element={<PendingFieldAgents />} />
          <Route path="/approved-agents" element={<ApprovedFieldAgents />} />
          <Route path="/rejected-agents" element={<RejectedFieldAgents />} />
          <Route path="/engagements" element={<EngagementHome />} />
          <Route path="/create-engagement" element={<CreateEngagement />} />
          <Route path="/pending-engagement" element={<PendingEngagement />} />
          <Route path="/enumeration" element={<AllAttendees />} />
          <Route path="/ongoing-enumeration" element={<OngoingEnumeration />} />
          <Route path="/all-farmers" element={<AllFarmers />} />
          <Route path="/cluster" element={<Cluster />} />
          <Route path="/influencer" element={<Influencer />} />


        </Route>
      </Routes>
    </Router>
  );
};

export default AdminRoutes;
