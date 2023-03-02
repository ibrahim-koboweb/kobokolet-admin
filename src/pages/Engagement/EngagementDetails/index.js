import React from "react";
import { Link } from "react-router-dom";
import { MdPeopleOutline, MdOutlinePersonPin } from "react-icons/md";
import { BsPersonCheck } from "react-icons/bs";

export default function EngagementDetails() {
  return (
    <div>
      <div className="text-base pt-1">Engagements Details</div>
      <div className="mt-4">
        <div className="grid lg:grid-cols-2 lg:grid-rows-1 ">
          <div className="bg-grey-100 rounded p-6 ">
            <div className="bg-white rounded p-6">
              <h2 className="text-2xl font-regular">
                Kubwa Farmers Community Engagement by Aniebiet Abasi
              </h2>
              <div className="gap-y-4 column-gap">
                <div className="mt-6">
                  <span className="flex gap-2 mt-1 items-center">
                    <p>Status:</p> <p className="font-light">Status</p>
                  </span>
                </div>
                <div>
                  <span className="flex gap-2 mt-1 items-center">
                    <p>Engagement Type :</p>{" "}
                    <p className="font-light">Status</p>
                  </span>
                </div>
                <div>
                  <span className="flex gap-2 mt-1 items-center">
                    <p>State: </p> <p className="font-light">Benin</p>
                  </span>
                </div>
                <div>
                  <span className="flex gap-2 mt-1 items-center">
                    <p>L.G.A: </p> <p className="font-light">Benden</p>
                  </span>
                </div>
                <div>
                  <span className="flex gap-2 mt-1 items-center">
                    <p>Ward:</p> <p className="font-light">Ikperi</p>
                  </span>
                </div>
                <div>
                  <span className="flex gap-2 mt-1 items-center">
                    <p>Date:</p> <p className="font-light">02/04/2023</p>
                  </span>
                </div>
                <div>
                  <span className="flex gap-2 mt-1 items-center">
                    <p>Time:</p> <p className="font-light">12:23pm</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white flex-1 rounded p-6 mt-6">
              <div className="flex align-center justify-between text-md">
                <p>Assigned Field Agents</p>
                <Link className="text-primary" to="#">
                  Assign a Field Agent
                </Link>
              </div>
              <div className="mt-8">
                <div className="flex items-center mt-2 gap-2">
                  <div
                    className="h-6 w-6 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                    style={{
                      backgroundImage:
                        'url("https://source.unsplash.com/80x80?face")',
                    }}
                  >
                    {" "}
                  </div>
                  <p>Sani Gabriel</p>
                </div>
                <div className="flex items-center mt-3 gap-2">
                  <div
                    className="h-6 w-6 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                    style={{
                      backgroundImage:
                        'url("https://source.unsplash.com/80x80?face")',
                    }}
                  >
                    {" "}
                  </div>
                  <p>Musa Mohammad</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-grey-100 rounded p-6 h-80">
            <div className="flex align-center justify-between text-md">
              <p>Engagement Report</p>
              <Link className="text-primary" to="/engagement/details/attendees">
                View All Attendees
              </Link>
            </div>
            <div className="mt-4">
              <div className="grid lg:grid-cols-2 lg:grid-rows-1     gap-4">
                <div className="bg-white rounded p-3 flex items-center ">
                  <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-200">
                    <MdPeopleOutline className="text-2xl text-black" />
                  </div>
                  <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">
                      Total Attendees
                    </span>
                    <div className="flex items-center">
                      <strong className="text-xl text-gray-700 font-semibold">
                        16
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded p-3 flex items-center">
                  <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-200">
                    <BsPersonCheck className="text-2xl text-black" />
                  </div>
                  <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">
                      Ready for Enumeration
                    </span>
                    <div className="flex items-center">
                      <strong className="text-xl text-gray-700 font-semibold">
                        16
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 lg:grid-rows-1  mt-4 gap-4">
                <div className="bg-white rounded p-3 flex items-center">
                  <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-200">
                    <MdOutlinePersonPin className="text-2xl text-black" />
                  </div>
                  <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">
                      Assigned Agent
                    </span>
                    <div className="flex items-center">
                      <strong className="text-xl text-gray-700 font-semibold">
                        16
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded p-3 flex items-center">
                  <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-200">
                    <MdOutlinePersonPin className="text-2xl text-black" />
                  </div>
                  <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">
                      Community Influencers
                    </span>
                    <div className="flex items-center">
                      <strong className="text-xl text-gray-700 font-semibold">
                        16
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white mt-6 rounded p-6 h-80">
                <div className="flex align-center text-sm">
                  <p>Comments and Remarks</p>
                  {/* <Link to="/engagement/details"> View All Attendees</Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
