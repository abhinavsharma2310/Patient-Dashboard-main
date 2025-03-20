const PatientCard = ({ patient, active, onClick }) => {
    return (
      <div
        className={`flex items-center p-4 border-b cursor-pointer ${active ? 'bg-cyan-50' : ''}`}
        onClick={onClick}
      >
       <img
        src={patient.profile_picture || "/api/placeholder/40/40"}
        alt={`Profile picture of ${patient.name}`}
        className="w-10 h-10 rounded-full"
      />
        <div className="ml-3 flex-1">
          <div className="font-medium text-gray-800">{patient.name}</div>
          <div className="text-xs text-gray-500">{`${patient.gender}, ${patient.age}`}</div>
        </div>
        <button className="text-gray-500">
          {/* More Icon */}
        </button>
      </div>
    );
  };
  export default PatientCard;