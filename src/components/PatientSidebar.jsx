import React, { useState, useEffect } from "react"; 
import PatientCard from "./PatientCard";
import axios from "axios";
import Searchbar from "../assets/Searchbar.png";
const PatientSidebar = ({ activePatient, setActivePatient }) => {
const [patients, setData] = useState([]);


  useEffect(() => {
    console.log("Fetching data..."); 

    const username = "coalition";
    const password = "skills-test";
    const auth = btoa(`${username}:${password}`);

    axios
      .get("https://fedskillstest.coalitiontechnologies.workers.dev", {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      })
      .then((response) => {
        console.log("Fetched API Data:", response.data); 
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="w-64 bg-white  mt-4 border rounded-lg">
    <div className="p-4 border-b flex justify-between items-center">
      <h2 className="text-xl font-bold text-gray-800">Patients</h2>
      {/* Search Icon */}
      <img src={Searchbar} alt="Search" className="w-5 h-5 cursor-pointer" />
    </div>
    <div className="overflow-y-auto h-full">
      {patients.map((patient) => (
        <PatientCard
          key={patient.name}
          patient={patient}
          active={patient.name === activePatient}
          onClick={() => setActivePatient(patient.name)}
        />
      ))}
    </div>
  </div>
  
  
  );
};

export default PatientSidebar;
