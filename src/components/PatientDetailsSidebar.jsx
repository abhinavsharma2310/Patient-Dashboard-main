import PatientDetailItem from "./PatientDetailItem";
import React from "react";

const PatientDetailsSidebar = ({ patient }) => {
  if (!patient) {
    return <p className="text-gray-500 p-4">No patient selected.</p>;
  }

  const patientDetails = [
    { label: "Date Of Birth", value: patient.date_of_birth || "N/A" },
    { label: "Gender", value: patient.gender || "N/A" },
    { label: "Contact Info", value: patient.phone_number || "N/A" },
    { label: "Emergency Contacts", value: patient.emergency_contact || "N/A" },
    { label: "Insurance Provider", value: patient.insurance_type || "N/A" },
  ];

  return (
    <div className="w-full max-w-[300px] bg-white shadow-lg rounded-lg p-4 border border-gray-200">
      {/* Patient Info */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={patient.profile_picture}
          alt={patient.name}
          className="w-24 h-24 rounded-full mb-3 shadow-md"
        />
        <h2 className="text-lg font-semibold text-gray-800">{patient.name}</h2>
      </div>

      {/* Patient Details Box */}
      <div className="space-y-4">
        {patientDetails.map((detail, index) => (
          <PatientDetailItem key={index} label={detail.label} value={detail.value} />
        ))}
      </div>

      {/* Button */}
      <button className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-full text-sm transition-all">
        Show All Information
      </button>

      {/* Lab Results Box */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-md font-bold text-gray-700 mb-3">Lab Results</h3>
        <div className="space-y-3">
          {patient.lab_results && patient.lab_results.length > 0 ? (
            patient.lab_results.map((label, index) => <LabResultItem key={index} label={label} />)
          ) : (
            <p className="text-gray-500 text-sm">No lab results available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const LabResultItem = ({ label }) => {
  return (
    <div className="flex items-center justify-between bg-white p-2 rounded-md shadow-sm border border-gray-300">
      <span className="text-sm text-gray-700">{label}</span>
      <button className="text-gray-500 hover:text-gray-700 transition">
        <DownloadIcon />
      </button>
    </div>
  );
};

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3V15M12 15L16 11M12 15L8 11M5 19H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PatientDetailsSidebar;
