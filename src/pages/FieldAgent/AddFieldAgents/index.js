import React from "react";

export default function AddFieldAgents() {
  function openView(newview, oldview) {
    document.getElementById(newview).style.display = "block";
    document.getElementById(oldview).style.display = "none";
  }

  return (
    <div>
      <div
        className="container animate__animated animate__fadeInLeftBig"
        id="biodata"
      >
        <div className="grid lg:grid-cols-12 lg:grid-rows-1    ">
          <div className="rounded  col-span-2"></div>
          <div className=" rounded col-span-8">
            <div className="text-xl text-center ">Add a Field Agents</div>

            <div className="bg-white  mt-5 rounded-lg ">
              <p className="text-center pt-7">
                <b>Step 1:</b> Enter Agent Personal Information
              </p>
              <div className="">
                <form className="">
                  <div className="grid grid-cols-2 grid-rows-4 p-6">
                    <div className="p-3">
                      <div className="">
                        <label className="block text-gray-700 mb-2 text-sm">
                          Firs tName
                        </label>
                        <input className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                      </div>
                    </div>
                    <div>
                      <div className=" p-3">
                        <label className="block text-gray-700 mb-2 text-sm">
                          Last Name
                        </label>
                        <input className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="">
                        <label className="block text-gray-700 mb-2 text-sm">
                          Email
                        </label>
                        <input className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                      </div>
                    </div>
                    <div>
                      <div className=" p-3">
                        <label className="block text-gray-700 mb-2 text-sm">
                          Phone Number
                        </label>
                        <input className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="">
                        <label className="block text-gray-700 mb-2 text-sm">
                          State
                        </label>
                        <select className="text-sm bg-gray-50 appearance-none border-gray-300 rounded w-full py-3 px-3  text-gray-500  leading-tight focus:outline-none focus:shadow-outline">
                          <option disabled selected>
                            --Select State--
                          </option>
                          <option value="Lagos">Lagos State</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <div className=" p-3">
                        <label className="block text-gray-700 mb-2">City</label>
                        <input className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                      </div>
                    </div>

                    <div className="col-span-2">
                      <div className=" p-3">
                        <label className="block text-gray-700 mb-2">
                          Enter Specific Address Details
                        </label>
                        <input
                          placeholder="House No, Street, Landmark"
                          className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pb-7 px-8 text-right">
                    <button
                      className="bg-primary   text-white py-3 px-10 rounded-lg focus:outline-none focus:shadow-outline"
                      onClick={() => openView("guarantor1", "biodata")}
                      type="button"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container animate__animated animate__fadeInLeftBig hidden"
        id="guarantor1"
      >
        <div className="grid lg:grid-cols-12 lg:grid-rows-1    ">
          <div className="rounded  col-span-2"></div>
          <div className=" rounded col-span-8">
            <div className="text-xl text-center ">Add a Field Agents</div>

            <div className="bg-white  mt-5 rounded-lg ">
              <p className="text-center pt-7">
                <b>Step 2:</b> Enter Guarantors Details
              </p>
              <div></div>
              <div className="">
                <form className="">
                  <div className="grid grid-cols-2 grid-rows-4 p-6">
                    <div className="p-3">
                      <div className="">
                        <label className="block text-gray-700 mb-2 text-sm">
                          Firs tName
                        </label>
                        <input className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                      </div>
                    </div>
                    <div>
                      <div className=" p-3">
                        <label className="block text-gray-700 mb-2 text-sm">
                          Last Name
                        </label>
                        <input className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="">
                        <label className="block text-gray-700 mb-2 text-sm">
                          Email
                        </label>
                        <input className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                      </div>
                    </div>
                    <div>
                      <div className=" p-3">
                        <label className="block text-gray-700 mb-2 text-sm">
                          Phone Number
                        </label>
                        <input className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="">
                        <label className="block text-gray-700 mb-2 text-sm">
                          State
                        </label>
                        <select className="text-sm bg-gray-50 appearance-none border-gray-300 rounded w-full py-3 px-3  text-gray-500  leading-tight focus:outline-none focus:shadow-outline">
                          <option disabled selected>
                            --Select State--
                          </option>
                          <option value="Lagos">Lagos State</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <div className=" p-3">
                        <label className="block text-gray-700 mb-2">City</label>
                        <input className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                      </div>
                    </div>

                    <div className="col-span-2">
                      <div className=" p-3">
                        <label className="block text-gray-700 mb-2">
                          Enter Specific Address Details
                        </label>
                        <input
                          placeholder="House No, Street, Landmark"
                          className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pb-7 px-8 text-right relative">
                    <button
                      className="bg-white border border-primary   text-primary py-3 px-10 rounded-lg focus:outline-none focus:shadow-outline absolute left-0 ml-10"
                      onClick={() => openView("biodata", "guarantor1")}
                      type="button"
                    >
                      Back
                    </button>

                    <button
                      className="bg-primary   text-white py-3 px-10 rounded-lg focus:outline-none focus:shadow-outline"
                      onClick={() => openView("guarantor2", "guarantor1")}
                      type="button"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container animate__animated animate__fadeInLeftBig hidden"
        id="guarantor2"
      >
        <div className="grid lg:grid-cols-12 lg:grid-rows-1    ">
          <div className="rounded  col-span-2"></div>
          <div className=" rounded col-span-8">
            <div className="text-xl text-center ">Add a Field Agents</div>

            <div className="bg-white  mt-5 rounded-lg ">
              <p className="text-center pt-7">
                <b>Step 3:</b> Setup Login Details
              </p>
              <div></div>
              <div className="">
                <form className="">
                  <div className="grid grid-cols-2 grid-rows-3 p-6">
                    <div className="p-3 col-span-2">
                      <div className="">
                        <label className="block text-gray-700 mb-2 text-sm">
                          Upload a Photo
                        </label>
                        <div className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                          <input type="file" className="" />
                        </div>
                      </div>
                    </div>
                    <div className=" p-3 col-span-2">
                      <label className="block text-gray-700 mb-2 text-sm">
                        Upload a Government Issues ID
                      </label>
                      <div className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <input type="file" className="" />
                      </div>
                    </div>

                    <div className="p-3 ">
                      <div className="">
                        <label className="block text-gray-700 mb-2 text-sm">
                          Password
                        </label>
                        <input className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                      </div>
                    </div>
                    <div>
                      <div className=" p-3">
                        <label className="block text-gray-700 mb-2 text-sm">
                          Comfirm Password
                        </label>
                        <input className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                      </div>
                    </div>
                  </div>
                  <div className="pb-7 px-8 text-right relative">
                    <button
                      className="bg-white border border-primary   text-primary py-3 px-10 rounded-lg focus:outline-none focus:shadow-outline absolute left-0 ml-10"
                      onClick={() => openView("guarantor1", "guarantor2")}
                      type="button"
                    >
                      Back
                    </button>

                    <button
                      className="bg-primary   text-white py-3 px-10 rounded-lg focus:outline-none focus:shadow-outline"
                      onClick={() => openView("success", "guarantor2")}
                      type="button"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container animate__animated animate__fadeInLeftBig hidden"
        id="success"
      >
        <div className="grid lg:grid-cols-12 lg:grid-rows-1    ">
          <div className="rounded  col-span-2"></div>
          <div className=" rounded col-span-8">
            <div className=" mt-5 rounded-lg ">
              <div className="  bg-white text-center  pt-20 pb-20">
                <center>
                  <svg
                    width="102"
                    height="101"
                    viewBox="0 0 102 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="51.0006"
                      cy="50.4675"
                      r="30.7193"
                      fill="#28AA63"
                    />
                    <circle
                      cx="51.0002"
                      cy="50.4675"
                      r="39.4963"
                      fill="#28AA63"
                      fill-opacity="0.4"
                    />
                    <circle
                      cx="51.0002"
                      cy="50.4675"
                      r="50.4675"
                      fill="#28AA63"
                      fill-opacity="0.15"
                    />
                    <path
                      d="M46.584 64.6349L35.2079 53.1592C34.5244 52.4698 34.5244 51.3519 35.2079 50.6624L37.683 48.1656C38.3664 47.4761 39.4746 47.4761 40.1581 48.1656L47.8216 55.8961L64.2359 39.3382C64.9193 38.6488 66.0275 38.6488 66.711 39.3382L69.186 41.835C69.8695 42.5244 69.8695 43.6423 69.186 44.3318L49.0591 64.6349C48.3756 65.3244 47.2674 65.3244 46.584 64.6349Z"
                      fill="white"
                    />
                  </svg>
                </center>

                <p className="text-primary text-bold text-3xl pt-4">
                  Approved!
                </p>
                <p className="p-5">
                  Field Agent registration has been submited successfully
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
