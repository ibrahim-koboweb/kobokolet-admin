import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Auth";
import { Dashboard } from "../pages/Others";
const AdminRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" exact element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AdminRoutes;
