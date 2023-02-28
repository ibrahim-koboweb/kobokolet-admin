import React from "react";
import { Link } from "react-router-dom";
import { getAgentStatus } from "../../../lib/helpers";
import { GrView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";

const fieldAgentData = [
  {
    id: "1",
    agent_id: "4324",
    agent_name: "Shirley A. Lape",
    phone_no: "08100112233",
    engagement: "5",
    farmers: "5",
    cluster: "Egeni Bode community",
    status: "REJECTED",
  },
  {
    id: "7",
    agent_id: "7453",
    agent_name: "Ryan Carroll",
    phone_no: "08100112233",
    engagement: "14",
    farmers: "14",
    cluster: "Akoko Edo",
    status: "PENDING",
  },
  {
    id: "2",
    agent_id: "5434",
    agent_name: "Mason Nash",
    phone_no: "08100112233",
    engagement: "34",
    farmers: "34",
    cluster: "Eshan Community",
    status: "APPROVED",
  },
  {
    id: "3",
    agent_id: "9854",
    agent_name: "Luke Parkin",
    phone_no: "08100112233",
    engagement: "12",
    farmers: "12",
    cluster: "Esako Community",
    status: "PENDING",
  },
  {
    id: "4",
    agent_id: "8763",
    agent_name: "Anthony Fry",
    phone_no: "08100112233",
    engagement: "32",
    farmers: "32",
    cluster: "Afao Community",
    status: "PENDING",
  },
  {
    id: "5",
    agent_id: "5627",
    agent_name: "Ryan Carroll",
    phone_no: "08100112233",
    engagement: "65",
    farmers: "65",
    cluster: "Benden Community",
    status: "APPROVED",
  },
];

export default function AllFieldAgents() {
  return (
    <div>
      <div className="text-xl pt-1">All Field Agents</div>

      <div className="mt-6 bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <div className="flex items-end py-2 justify-between">
          <div>
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sort by Status
            </label>
            <select
              id="countries"
              class=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
                <th>Agent Name</th>
                <th>Agent ID</th>
                <th>Phone Number</th>
                <th>Engagement</th>
                <th>Farmers</th>
                <th>Cluster</th>
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
                    <div className="flex items-center gap-2">
                      {" "}
                      <div
                        className="h-6 w-6 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                        style={{
                          backgroundImage:
                            'url("https://source.unsplash.com/80x80?face")',
                        }}
                      >
                        {" "}
                      </div>
                      <Link to="#">{agent.agent_name}</Link>
                    </div>
                  </td>
                  <td>
                    <Link to={`/product/${agent.agent_id}`}>
                      #{agent.agent_id}
                    </Link>
                  </td>
                  <td>{agent.phone_no}</td>
                  <td>{agent.engagement}</td>
                  <td>{agent.farmers}</td>
                  <td>{agent.cluster}</td>
                  <td>{getAgentStatus(agent.status)}</td>
                  <td>
                    <span className="flex items-center gap-2">
                      <GrView /> <FiEdit /> <MdDeleteOutline fontSize={20} />
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
