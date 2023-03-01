import React from 'react'
import EngagementStats from './EngagementStats';
import EngagementList from "./EngagementList";

export default function EngagementHome() {
  return (
    <div>
      <div className="text-xl pt-1">Engagements</div>
      <EngagementStats />
      <EngagementList />
    </div>
  );
}
