import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GrView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";

const URL = "http://136.244.83.3/main/api/Enumeration";

export default function AllFarmers() {
  const [enumerations, setEnumerations] = useState([]);

  useEffect(() => {
    const fetchEnumerations = async () => {
      const result = await fetch(URL);
      result.json().then((json) => {
        setEnumerations(json.data.content);
        console.log(json.data.content);
      });
    };
    fetchEnumerations();
  }, []);

  return (
    <div>
      <div className="text-xl pt-1">All Farmers</div>
      <div className="bg-white mt-6 p-6">
        <div className="flex items-end py-2  justify-between">
          <div className={"flex gap-2 items-center"}>
            <div>
              <label
                // for="countries"
                className="block mb-2 text-sm font-regular text-gray-900 dark:text-white"
              >
                NIN Status
              </label>
              <select
                id="countries"
                className=" border border-gray-200 text-gray-500 text-sm rounded-md font-light focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
              >
                <option selected>All NIN Status </option>
                <option value="US">Have NIN</option>
                <option value="CA">Don't have NIN</option>
              </select>
            </div>

            <div>
              <label
                // for="countries"
                className="block mb-2 text-sm font-regular text-gray-900 dark:text-white"
              >
                Gender
              </label>
              <select
                id="countries"
                className=" border border-gray-200 text-gray-500 text-sm rounded-md font-light focus:ring-green-500 focus:border-green-400 block w-full p-2.5 "
              >
                <option selected>All Gender </option>
                <option value="US">Male</option>
                <option value="CA">Female</option>
              </select>
            </div>

            <div>
              <label
                // for="countries"
                className="block mb-2 text-sm font-regular text-gray-900 dark:text-white"
              >
                State
              </label>
              <select
                id="countries"
                className=" border border-gray-200 text-gray-500 text-sm rounded-md font-light focus:ring-green-500 focus:border-green-400 block w-full p-2.5 "
              >
                <option selected>Abuja </option>
                <option value="US">Kaduna</option>
                <option value="CA">Lagos</option>
              </select>
            </div>

            <div>
              <label
                // for="countries"
                className="block mb-2 text-sm font-regular text-gray-900 dark:text-white"
              >
                Cluster
              </label>
              <select
                id="countries"
                className=" border border-gray-200 text-gray-500 text-sm rounded-md font-light focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
              >
                <option selected>All Clusters </option>
                <option value="US">Cluster 001</option>
                <option value="CA">Cluster 002</option>
              </select>
            </div>
          </div>

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

        <div className="relative overflow-x-auto mt-4 shadow-md w-100% sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  First Name
                </th>
                <th scope="col" className="px-6 whitespace-nowrap  py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Middle Name
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  D.O.B
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Marital Status
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  House Size
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  State
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  LGA
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Ward
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Community
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Why Community
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  House Status
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Education Level
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Have Bank
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  ID Type
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Any Disability
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Any Discrepancy
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Num Of Farm
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Farm Fund Source
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Farmer Own Land
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Farm Labour Source
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Farm Water Source
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Is Intervention
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Challenges
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Sales Record
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Farming Mode
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Farmer Association
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Factor Improve Yield
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  How Product Sell
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Nearest Landmark
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Residential Address
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Field Agent Comment
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Farming Mode SubItems
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Sex Age Category
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Displacement Category
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Disability Catergory
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  ClusterID
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {enumerations.length &&
                enumerations.map((farmer) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {farmer.FirstName}
                    </th>
                    <td className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                      {farmer.LastName}
                    </td>
                    <td className="px-6 py-2">{farmer.MiddleName}</td>
                    <td className="px-6 py-2">{farmer.Gender}</td>
                    <td className="px-6 py-2">{farmer.PhoneNumber}</td>
                    <td className="px-6 py-2">{farmer.Dob}</td>
                    <td className="px-6 py-2">{farmer.MaritalStatus}</td>
                    <td className="px-6 py-2">{farmer.HouseHoldSize}</td>
                    <td className="px-6 py-2">{farmer.State}</td>
                    <td className="px-6 py-2">{farmer.LGA}</td>
                    <td className="px-6 py-2">{farmer.Ward}</td>
                    <td className="px-6 py-2">{farmer.Community}</td>
                    <td className="px-6 py-2">{farmer.WhyCommunity}</td>
                    <td className="px-6 py-2">{farmer.HouseHoldStatus}</td>
                    <td className="px-6 py-2">{farmer.EducationLevel}</td>
                    <td className="px-6 py-2">{farmer.HaveBank}</td>
                    <td className="px-6 py-2">{farmer.IDType}</td>
                    <td className="px-6 py-2">{farmer.AnyDisability}</td>
                    <td className="px-6 py-2">{farmer.AnyDiscrepancy}</td>
                    <td className="px-6 py-2">{farmer.NumOfFarm}</td>
                    <td className="px-6 py-2">{farmer.FarmFundSource}</td>
                    <td className="px-6 py-2">{farmer.FarmerOwnLand}</td>
                    <td className="px-6 py-2">{farmer.FarmLabourSource}</td>
                    <td className="px-6 py-2">{farmer.FarmWaterSource}</td>
                    <td className="px-6 py-2">{farmer.IsIntervention}</td>
                    <td className="px-6 py-2">{farmer.Challenges}</td>
                    <td className="px-6 py-2">{farmer.SalesRecord}</td>
                    <td className="px-6 py-2">{farmer.FarmingMode}</td>
                    <td className="px-6 py-2">{farmer.FarmerAssociation}</td>
                    <td className="px-6 py-2">{farmer.FactorImproveYield}</td>
                    <td className="px-6 py-2">{farmer.HowProductSell}</td>
                    <td className="px-6 py-2">{farmer.NearestLandmark}</td>
                    <td className="px-6 py-2">{farmer.ResidentialAddress}</td>
                    <td className="px-6 py-2">{farmer.FieldAgentComment}</td>
                    <td className="px-6 py-2">{farmer.FarmingModeSubItems}</td>
                    <td className="px-6 py-2">{farmer.SexAgeCategory}</td>
                    <td className="px-6 py-2">{farmer.DisabilityCatergory}</td>
                    <td className="px-6 py-2">{farmer.DisplacementCategory}</td>
                    <td className="px-6 py-2">{farmer.Status}</td>
                    <td className="px-6 py-2">{farmer.ClusterID}</td>
                    <td className="px-6 py-2">
                      <span className="flex items-center gap-2">
                        <Link to="/farmer-details">
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
