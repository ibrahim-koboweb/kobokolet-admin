import React from "react";
import { Link } from "react-router-dom";
import { getAgentStatus } from "../../lib/helpers";
import { GrView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import { format } from "date-fns";

const fieldAgentData = [
  {
    id: "1",
    agent_id: "4324",
    agent_name: "Shirley A. Lape",
    phone_no: "56",
    state: "Kano",
    farmers: "5",
    cluster: "Egeni Bode LGA",
    city: "Egeni",
    creation_date: "2022-05-17T03:24:00",
    status: "REJECTED",
  },
  {
    id: "7",
    agent_id: "7453",
    agent_name: "Ryan Carroll",
    phone_no: "56",
    state: "Katsina",
    farmers: "14",
    cluster: "Akoko Edo",
    city: "Akoko",
    creation_date: "2022-05-17T03:24:00",
    status: "PENDING",
  },
  {
    id: "2",
    agent_id: "5434",
    agent_name: "Mason Nash",
    phone_no: "56",
    state: "Abuja",
    farmers: "34",
    cluster: "Eshan LGA",
    city: "Eshan",
    creation_date: "2022-05-17T03:24:00",
    status: "APPROVED",
  },
  {
    id: "3",
    agent_id: "9854",
    agent_name: "Luke Parkin",
    phone_no: "56",
    state: "Kaduna",
    farmers: "12",
    cluster: "Esako LGA",
    city: "Esako",
    creation_date: "2022-05-17T03:24:00",
    status: "PENDING",
  },
  {
    id: "4",
    agent_id: "8763",
    agent_name: "Anthony Fry",
    phone_no: "56",
    state: "Sokoto",
    farmers: "32",
    cluster: "Afao LGA",
    city: "Afao",
    creation_date: "2022-05-17T03:24:00",
    status: "PENDING",
  },
  {
    id: "5",
    agent_id: "5627",
    agent_name: "Ryan Carroll",
    phone_no: "56",
    state: "borno",
    farmers: "65",
    city: "Benden",
    cluster: "Benden LGA",
    creation_date: "2022-05-17T03:24:00",
    status: "APPROVED",
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
                <th>S/N</th>
                <th>Engagement Type</th>
                <th>Assigned Agent</th>
                <th>Attendees</th>
                <th>State</th>
                <th>LGA</th>
                <th>City</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {fieldAgentData.map((agent) => (
                <tr key={agent.id}>
                  <td>
                    <Link to={`/order/${agent.id}`}>#{agent.id}</Link>
                  </td>
                  <td>
                    <Link to="#">{agent.agent_name}</Link>
                  </td>
                  <td>
                    <Link to={`/product/${agent.agent_id}`}>
                      #{agent.agent_id}
                    </Link>
                  </td>
                  <td>{agent.phone_no}</td>
                  <td>{agent.state}</td>
                  <td>{agent.cluster}</td>
                  <td>{agent.city}</td>
                  <td>
                    {format(new Date(agent.creation_date), "dd MMM yyyy")}
                  </td>
                  <td>{getAgentStatus(agent.status)}</td>
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
