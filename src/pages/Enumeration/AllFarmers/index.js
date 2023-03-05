import React from "react";
import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";

const fieldAgentData = [
  {
    id: "1",
    agent_id: "Male",
    agent_name: "Shirley A. Lape",
    phone_no: "08100112233",
    engagement: "Yes",
    farmers: "5",
    cluster: "Micheal",
    status: "REJECTED",
  },
  {
    id: "7",
    agent_id: "Male",
    agent_name: "Ryan Carroll",
    phone_no: "08100112233",
    engagement: "Yes",
    farmers: "14",
    cluster: "Tony",
    status: "PENDING",
  },
  {
    id: "2",
    agent_id: "Female",
    agent_name: "Mason Nash",
    phone_no: "08100112233",
    engagement: "Yes",
    farmers: "34",
    cluster: "Sani",
    status: "APPROVED",
  },
  {
    id: "3",
    agent_id: "Female",
    agent_name: "Luke Parkin",
    phone_no: "08100112233",
    engagement: "Yes",
    farmers: "12",
    cluster: "Busayo",
    status: "PENDING",
  },
  {
    id: "4",
    agent_id: "Male",
    agent_name: "Anthony Fry",
    phone_no: "08100112233",
    engagement: "Yes",
    farmers: "32",
    cluster: "Friday",
    status: "PENDING",
  },
  {
    id: "5",
    agent_id: "Male",
    agent_name: "Ryan Carroll",
    phone_no: "08100112233",
    engagement: "Yes",
    farmers: "65",
    cluster: "Benden",
    status: "APPROVED",
  },
];

export default function AllFarmers() {
  return (
    <div>
      <div className="text-xl pt-1">All Farmers</div>

      <div className="mt-6 bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <div className="flex items-end py-2 justify-between">
          <div>
            <label
              for="countries"
              class="block mb-2 text-sm font-regular text-gray-900 dark:text-white"
            >
              Sort by NIN Status
            </label>
            <select
              id="countries"
              class=" border border-gray-300 text-gray-900 text-sm rounded-md font-light focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
                <th>State</th>
                <th>LGA</th>
                <th>Community</th>
                <th>No Of Farms</th>
                <th>D.O.B</th>
                <th>Cluster ID</th>
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
                      {agent.agent_id}
                    </Link>
                  </td>
                  <td>{agent.phone_no}</td>
                  <td>{agent.engagement}</td>
                  <td>{agent.farmers}</td>
                  <td>{agent.farmers}</td>
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
