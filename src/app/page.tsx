import StudentCard from "@/components/studentCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-6">Student List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StudentCard name="Alina" age={20} rollNumber={1} studentClass="10th Grade" />
        <StudentCard name="Rida" age={18} rollNumber={2} studentClass="9th Grade" />
        <StudentCard name="Umaima" age={21} rollNumber={3} studentClass="12th Grade" />
        <StudentCard name="Wasfa" age={22} rollNumber={4} studentClass="10th Grade" />
      </div>
    </div>
  );
}
