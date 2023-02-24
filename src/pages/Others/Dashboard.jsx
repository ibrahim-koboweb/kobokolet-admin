import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="">
      <p>
        <div className="text-base">
          <span className="text-2xl mr-1">👋 </span>Hi Admin!
        </div>
        <div className="text-xl pt-1">Welcome to your dashboard</div>
      </p>
      <div className="mt-8">
        <div className="grid lg:grid-cols-4 lg:grid-rows-1  xs:grid-cols-2 xs:grid-rows-2   gap-4">
          <div className="bg-white rounded p-3 h-16">1</div>
          <div className="bg-white rounded p-3 h-16">2</div>
          <div className="bg-white rounded p-3 h-16">3</div>
          <div className="bg-white rounded p-3 h-16">4</div>
        </div>
      </div>
      <div className="mt-4">
        <div className="grid lg:grid-cols-2 lg:grid-rows-1     gap-4">
          <div className="bg-white rounded p-3 h-80">1</div>
          <div className="bg-white rounded p-3 h-80">2</div>
        </div>
      </div>
      {/* <Link to='/engagements' className='underline'>go to engagements</Link> */}
    </div>
  );
};

export default Dashboard;
