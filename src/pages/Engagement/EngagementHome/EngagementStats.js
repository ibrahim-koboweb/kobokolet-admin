import React from "react";
import {
  GrDocumentUser,
  GrDocumentTime,
  GrDocumentVerified,
  GrDocumentMissing,
} from "react-icons/gr";

export default function EngagementStats() {
  return (
    <div className="flex gap-4 mt-6">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-200">
          <GrDocumentUser className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Engagement
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">542</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-200">
          <GrDocumentTime className="text-2xl text-orange-600" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Pending Engagement
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">34</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-200">
          <GrDocumentVerified className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Completed Engagement
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">12</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-200">
          <GrDocumentMissing className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Rejected Engagements
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">16</strong>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-md p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
