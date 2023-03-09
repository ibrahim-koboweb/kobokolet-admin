import React from "react";
import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import { format } from "date-fns";

const fieldAgentData = [
  {
    id: "4324",
    state: "Kogi State",
    city: "Lokoga",
    lga: "Bassa LGA",
    ward: "Ogene",
    attendee: "10",
    assigned_farmer: "5",
    creation_date: "2022-05-17T03:24:00",
  },
];

export default function Cluster() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-2xl  pt-1 font-medium">Clusters</div>
        <div className={"flex items-center gap-4"}>
          <button
            className="bg-primary py-3 px-6 rounded text-white"
            // onClick={handlePrint}
          >
            <Link to="/cluster/create">Create New Cluster</Link>
          </button>

          {/* <button
            className="bg-grey-100 border border-primary py-3 px-6 rounded text-primary"
            // onClick={handlePrint}
          >
            Create Clusters
          </button> */}
        </div>
      </div>
      <div className="mt-6 bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <div className="flex items-end py-2 justify-between">
          <div>
            <label
              // htmlFor="countries"
              className="block mb-2 text-sm font-regular text-gray-900 dark:text-white"
            >
              Sort by Status
            </label>
            <select
              id="countries"
              className=" border border-gray-300 text-gray-900 text-sm rounded-md font-light focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option selected>All Status </option>
              <option value="US">Pending Request</option>
              <option value="CA">Approved Agents</option>
              <option value="FR">Rejected Agents</option>
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
                <th>Cluster ID</th>
                <th>State</th>
                <th>City</th>
                <th>LGA</th>
                <th>Ward</th>
                <th>Assigned Attendees</th>
                <th>Assigned Agent</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {fieldAgentData.map((agent) => (
                <tr key={agent.id}>
                  <td>
                    <Link>#{agent.id}</Link>
                  </td>
                  <td>
                    <Link>{agent.state}</Link>
                  </td>
                  <td>
                    <Link to="#">{agent.city}</Link>
                  </td>
                  <td>{agent.lga}</td>
                  <td>{agent.ward}</td>
                  <td>{agent.attendee}</td>
                  <td>{agent.assigned_farmer}</td>
                  <td>
                    {format(new Date(agent.creation_date), "dd MMM yyyy")}
                  </td>
                  <td>
                    <span className="flex items-center gap-2">
                      <Link to="/engagement/details">
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
