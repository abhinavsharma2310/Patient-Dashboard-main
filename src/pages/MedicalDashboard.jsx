import React, { useState } from "react";

import DiagnosisHistory from "../components/DiagnosisHistory";
import DiagnosticList from "../components/DiagnosticList";
import Header from "../components/Header";
import PatientDetailsSidebar from "../components/PatientDetailsSidebar";
import PatientSidebar from "../components/PatientSidebar";
import VitalSigns from "../components/VitalSigns";

const MedicalDashboard = ({ data }) => {
  const [activePatient, setActivePatient] = useState(data?.[0]?.name || "");

  // Find the active patient's data
  const selectedPatient = data.find((patient) => patient.name === activePatient);
  console.log("selected patient: ", selectedPatient)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-1 flex-wrap">
        {/* Left Sidebar */}
        <div className="w-64 min-w-[250px] hidden lg:block">
          <PatientSidebar
            activePatient={activePatient}
            setActivePatient={setActivePatient}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 min-w-[300px]">
          {selectedPatient ? (
            <>
             <DiagnosisHistory data={selectedPatient} />
              <VitalSigns patient={selectedPatient} />
              <DiagnosticList diagnostics={selectedPatient.diagnostic_list || []} />
            </>
          ) : (
            <p className="text-gray-500">No patient selected.</p>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="w-60 min-w-[280px] max-w-[320px] bg-white shadow-md hidden lg:block">
          <PatientDetailsSidebar patient={selectedPatient} />
        </div>
      </div>

      {/* Mobile Responsive Sidebar (Moves Below Main Content) */}
      <div className="lg:hidden w-full bg-white shadow-md">
        <PatientDetailsSidebar patient={selectedPatient} />
      </div>
    </div>
  );
};

export default MedicalDashboard;
