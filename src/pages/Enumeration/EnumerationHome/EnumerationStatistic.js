import React from 'react'
import {
  GrDocumentUser,
} from "react-icons/gr";

export default function EnumerationStatistic() {
  return (
    //   <div className="flex gap-4 mt-6">
    <div className="grid grid-cols-4 sm:grid-cols-2 gap-4">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-200">
          <GrDocumentUser className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Enumerations
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">542</strong>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-200">
          <GrDocumentUser className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Enumerations
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">542</strong>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-200">
          <GrDocumentUser className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Enumerations
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">542</strong>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-200">
          <GrDocumentUser className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Enumerations
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">542</strong>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}



function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-md p-4 w-full border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
