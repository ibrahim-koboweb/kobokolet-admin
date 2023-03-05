import React from 'react'
import EnumerationStats from "./EnumerationStats";
import EnumerationList from './EnumerationList'

export default function EnumerationHome() {
  return (
    <div>
      <div className="text-xl pt-1">Enumerations</div>
      
      <EnumerationStats />
      <EnumerationList />
    </div>
  );
}
