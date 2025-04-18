"use client"

import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import CreateExamModel from "../components/create-exam";
import { useState } from "react"; 
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Exam {
  id: number;
  status: string;
}

const exams: Exam[] = [
  { id: 1, status: "Scheduled" },
  { id: 2, status: "Unverified" },
];

const ExamDashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const openModal = () => setIsModalOpen(true); 
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-black min-h-screen p-6 text-white flex flex-col relative">
      {!isModalOpen && (
        <>
          <div className="flex-grow overflow-x-auto">
            <Table className="w-full border-collapse text-left text-sm">
              <TableHeader>
                <TableRow className=" text-gray-400 bg-[#161716]">
                  <TableHead className="p-3">SN</TableHead>
                  <TableHead className="p-3">Name</TableHead>
                  <TableHead className="p-3">Date</TableHead>
                  <TableHead className="p-3">Candidates</TableHead>
                  <TableHead className="p-3">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {exams.map((exam) => (
                  <TableRow key={exam.id} className="border-b border-[#31283A]">
                    <TableCell className="p-3">{exam.id}</TableCell>
                    <TableCell className="p-3">Web3 Test</TableCell>
                    <TableCell className="p-3">12th Dec, 2025</TableCell>
                    <TableCell className="p-3">
                      <button className="text-white border-[1px] border-[#2D2E2D] rounded-[3rem] font-normal text-[0.75rem] bg-transparent px-4 py-2">
                        View
                      </button>
                    </TableCell>
                    <td className="p-3 text-[#4B4B4B]">{exam.status}</td>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Create Exam Section */}
          <div className="mt-8">
            <h2 className="text-sm font-normal text-[#D6DFFE]">Create Exam</h2>
            <Card className="mt-2 bg-[#161716] p-6 rounded-lg text-center">
              <p className="text-sm font-normal text-[#D6DFFE]">
                Create an exam, set a date for takers.
              </p>
              <div className="mt-4 flex justify-center">
                <button
                  onClick={openModal}
                  className="flex items-center justify-center w-[4.5rem] h-[4.5rem] bg-[#2D2E2D] rounded-full"
                >
                  <Plus size={16} color="white" />
                </button>
              </div>
              <button
                onClick={openModal}
                className="mt-8 bg-[#2D2E2D] px-4 py-2 rounded-md text-[#D6DFFE]"
              >
                + CREATE EXAM
              </button>
            </Card>
          </div>
        </>
      )}

      {isModalOpen && <CreateExamModel onClose={closeModal} />}
    </div>
  );
};

export default ExamDashboard;
