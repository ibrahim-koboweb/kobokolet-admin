import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Auth";
import { Dashboard } from "../pages/Others";
import Layout from "../components/Layouts";
import { EngagementHome } from "../pages/Engagement";
import FieldAgentLists from "../pages/FieldAgent/FieldAgentLists";
import { EnumerationHome } from "../pages/Enumeration";


const AdminRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />} >
         <Route index element={<Dashboard />} />
         <Route path="/engagements" element={<EngagementHome />} />
         <Route path="/field-agents" element={<FieldAgentLists />} />
         <Route path="/enumeration" element={<EnumerationHome />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AdminRoutes;
