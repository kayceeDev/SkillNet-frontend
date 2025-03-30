"use client";
import React from "react";
import CandidateTable, { ICandidates } from "./CandidateTable";
interface CandidateData {
  sn: number;
  address: string;
  date: string;
  certification: string;
  status: "Eligible" | "Unverified";
}

const data: ICandidates[] = [
  {
    sn: 1,
    address: "Web3 Test",
    date: "12th Dec, 2025",
    certification: "N/A",
    status: "Eligible",
  },
  {
    sn: 2,
    address: "Web3 Test",
    date: "12th Dec, 2025",
    certification: "N/A",
    status: "Unverified",
  },
];

const NewCandidates = () => {
  return (
    <div className="overflow-x-auto font-sans text-sm px-5 mt-10">
      <CandidateTable candidates={data} />
    </div>
  );
};

export default NewCandidates;
