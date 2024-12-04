

const StudentCard = ({ name, age, rollNumber, studentClass }) => {
    return (
      <div className="w-80 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-4">
          Student ID Card
        </h1>
        <div className="border-t border-gray-200 mt-4"></div>
        <div className="mt-4 text-gray-800">
          <p className="text-lg font-semibold">
            Name: <span className="font-normal">{name}</span>
          </p>
          <p className="text-lg font-semibold">
            Age: <span className="font-normal">{age}</span>
          </p>
          <p className="text-lg font-semibold">
            Roll Number: <span className="font-normal">{rollNumber}</span>
          </p>
          <p className="text-lg font-semibold">
            Class: <span className="font-normal">{studentClass}</span>
          </p>
        </div>
        <div className="border-t border-gray-200 mt-4"></div>
        <p className="text-sm text-center text-gray-500 mt-4">© 2024 School Name</p>
      </div>
    );
  };
  
  export default StudentCard;
  
