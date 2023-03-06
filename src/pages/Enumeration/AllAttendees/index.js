import React from "react";
import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import {getAttendeeData} from "../../../lib/services/attendeeData";
import { useState, useEffect } from "react";
import  * as XLSX  from "xlsx";






export default function AllAttendees() {

  const [attendeeData, setAttendeeData] = useState(null);

  useEffect(() => {
    setAttendeeData(getAttendeeData());
    ;
  }, []);


    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: "farmer data",
      onAfterPrint: () => alert("print success"),
    });
  
  
  const handleExport = () => {
    var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(attendeeData);
    
    XLSX.utils.book_append_sheet(wb, ws, "Attendee_Data");

    XLSX.writeFile(wb, "AttendeeData.xlsx");
    
  }
  
  
  return (
    <div
      ref={componentRef}
      style={{ width: "100%", height: window.innerHeight }}
      className="p-4"
    >
      <div className="flex items-center justify-between">
        <div className="text-2xl  pt-1 font-medium">All Attendees</div>
        <div className="flex items-center gap-4 justify-between">
          <button
            className="bg-primary py-3 px-6 rounded text-white"
            onClick={handleExport}
          >
            Export to Excel
          </button>
          <button
            className="bg-primary py-3 px-6 rounded text-white"
            onClick={handlePrint}
          >
            Print to PDF
          </button>
        </div>
      </div>
      <div className="mt-6 bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <div className="flex items-end py-2 justify-between">
          <div>
            <label
              // for="countries"
              className="block mb-2 text-sm font-regular text-gray-900 dark:text-white"
            >
              Sort by NIN Status
            </label>
            <select
              id="countries"
              className=" border border-gray-300 text-gray-900 text-sm rounded-md font-light focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option selected>All NIN Status </option>
              <option value="US">Have NIN</option>
              <option value="CA">Don't have NIN</option>
            </select>
          </div>
          {/* <strong className="text-gray-700 font-medium">All Field Agents</strong> */}
          <div className="relative">
            <HiOutlineSearch
              fontSize={20}
              className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Search..."
              className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm"
            />
          </div>
        </div>
        <div className="border-x border-gray-200 rounded-sm mt-3">
          <table className="w-full text-gray-700">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Attendee Name</th>
                <th>Gender</th>
                <th>Phone Number</th>
                <th>Have NIN</th>
                <th>Engagement ID</th>
                <th>Assigned Agent</th>
                <th>Cluster ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {attendeeData &&
                attendeeData.map((agent) => (
                  <tr key={agent.id}>
                    <td>
                      <Link to={`/order/${agent.id}`}>#{agent.id}</Link>
                    </td>
                    <td>
                      <Link to="#">{agent.agent_name}</Link>
                    </td>
                    <td>
                      <Link to={`/product/${agent.agent_id}`}>
                        {agent.agent_id}
                      </Link>
                    </td>
                    <td>{agent.phone_no}</td>
                    <td>{agent.engagement}</td>
                    <td>{agent.farmers}</td>
                    <td>{agent.cluster}</td>
                    <td>#567657</td>
                    <td>
                      <span className="flex items-center gap-2">
                        <Link to="/attendee-details">
                          <GrView />
                        </Link>
                        <FiEdit /> <MdDeleteOutline fontSize={20} />
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
