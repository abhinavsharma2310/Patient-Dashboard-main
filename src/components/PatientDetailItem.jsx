import React from "react";
import calendarIcon from "../assets/BirthIcon@2x.png";
import emergencyIcon from "../assets/PhoneIcon.png";
import genderIcon from "../assets/FemaleIcon.png";
import insuranceIcon from "../assets/InsuranceIcon.png";
import phoneIcon from "../assets/PhoneIcon.png";

const PatientDetailItem = ({ label, value }) => {
  const getIcon = (label) => {
    switch (label) {
      case "Date Of Birth":
        return calendarIcon;
      case "Gender":
        return genderIcon;
      case "Contact Info":
        return phoneIcon;
      case "Emergency Contacts":
        return emergencyIcon;
      case "Insurance Provider":
        return insuranceIcon;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-start space-x-3 ">
      {getIcon(label) && (
        <img src={getIcon(label)} alt={label} className="w-5 h-5 mt-1" />
      )}
      <div>
        <div className="text-xs text-gray-500">{label}</div>
        <div className="text-sm font-medium text-gray-800">{value}</div>
      </div>
    </div>
  );
};

export default PatientDetailItem;
