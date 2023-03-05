import React from "react";
import {
  GrDocumentUser,
  GrDocumentTime,
  GrDocumentVerified,
  GrDocumentMissing,
} from "react-icons/gr";

export default function EnumerationStats() {
  return (
   
      <div className=" grid lg:grid-cols-4 lg:grid-rows-1  xs:grid-cols-2 xs:grid-rows-2  gap-4 mt-6">
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-200">
            <GrDocumentUser className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Total Enumerations
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                542
              </strong>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-200">
            <GrDocumentUser className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Total Attendees
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                542
              </strong>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-200">
            <GrDocumentTime className="text-2xl text-orange-600" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Attendees with NIN
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                34
              </strong>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-200">
            <GrDocumentMissing className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Ongoing Enumeration
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                16
              </strong>
            </div>
          </div>
        </BoxWrapper>
      </div>
  
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-md p-4 flex-1 border border-gray-100 flex items-center">
      {children}
    </div>
  );
}
