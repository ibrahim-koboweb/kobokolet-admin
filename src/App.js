import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import "./assets/css/style.css";

//Bootstrap and jQuery libraries
// import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.min.js";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import AdminRoutes from "./routes/AdminRoutes";
import AuthContextProvider from "./Context/AuthContext";
import EngagementContextProvider from "./Context/EngagementContext";
import FieldAgentContextProvider from "./Context/FieldAgentContext";
import FarmerContextProvider from "./Context/FarmerContext";
function App() {
  return (
    <>
      <AuthContextProvider>
        <EngagementContextProvider />
        <FieldAgentContextProvider>
          <FarmerContextProvider>
            <AdminRoutes />
            <EngagementContextProvider />
          </FarmerContextProvider>
        </FieldAgentContextProvider>
      </AuthContextProvider>
      <ToastContainer />
    </>
  );
}

export default App;
