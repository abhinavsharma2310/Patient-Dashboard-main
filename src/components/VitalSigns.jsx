import HeartRateIcon from "../assets/HeartBPM.png";
import RespiratoryIcon from "../assets/respiratory.png";
import TemperatureIcon from "../assets/temperature.png";

const VitalSigns = ({ patient }) => {
  console.log("patient vitals: ", patient)
  if (!patient?.diagnosis_history?.length) {
    return <p className="text-gray-500 p-4">No vital sign data available.</p>;
  }

  const latestVitals = patient.diagnosis_history[0];

  const vitals = [
    {
      title: "Respiratory Rate",
      value: `${latestVitals?.respiratory_rate?.value ?? "N/A"} bpm`,
      status: latestVitals?.respiratory_rate?.levels ?? "Unknown",
      color: getStatusColor(latestVitals?.respiratory_rate?.levels),
      icon: RespiratoryIcon,
    },
    {
      title: "Temperature",
      value: `${latestVitals?.temperature?.value ?? "N/A"}°F`,
      status: latestVitals?.temperature?.levels ?? "Unknown",
      color: getStatusColor(latestVitals?.temperature?.levels),
      icon: TemperatureIcon,
    },
    {
      title: "Heart Rate",
      value: `${latestVitals?.heart_rate?.value ?? "N/A"} bpm`,
      status: latestVitals?.heart_rate?.levels ?? "Unknown",
      color: getStatusColor(latestVitals?.heart_rate?.levels),
      icon: HeartRateIcon,
    },
    {
      title: "Blood Pressure",
      value: `${latestVitals?.blood_pressure?.systolic?.value ?? "N/A"}/${latestVitals?.blood_pressure?.diastolic?.value ?? "N/A"} mmHg`,
      status: `Systolic: ${latestVitals?.blood_pressure?.systolic?.levels ?? "Unknown"}, Diastolic: ${latestVitals?.blood_pressure?.diastolic?.levels ?? "Unknown"}`,
      color: getStatusColor(latestVitals?.blood_pressure?.systolic?.levels || latestVitals?.blood_pressure?.diastolic?.levels),
      icon: HeartRateIcon,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 p-4">
      {vitals.map((vital, index) => (
        <VitalCard key={index} {...vital} />
      ))}
    </div>
  );
};

const VitalCard = ({ title, value, status, color, icon }) => {
  return (
    <div className={`${color} p-6 rounded-2xl shadow-lg flex flex-col items-center border border-gray-300`}>
      <img src={icon} alt={title} className="w-16 h-16 mb-4" />
      <div className="text-xl font-semibold text-gray-700 mb-2">{title}</div>
      <div className="text-4xl font-bold text-gray-900 mb-2">{value}</div>
      <div className="text-sm font-medium text-gray-600">{status}</div>
    </div>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case "Normal":
      return "bg-blue-100";
    case "Higher than Average":
      return "bg-red-100";
    case "Lower than Average":
      return "bg-yellow-100";
    default:
      return "bg-gray-100";
  }
};

export default VitalSigns;
