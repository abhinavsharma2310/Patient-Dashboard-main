import BloodPressureChart from "./BloodPressureChart";
import PropTypes from "prop-types";

const DiagnosisHistory = ({ data }) => {
  console.log("dia hsis: ", data)
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Diagnosis History</h2>
      <BloodPressureChart diagnosisHistory={data.diagnosis_history} />
    </div>
  );
};

DiagnosisHistory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      month: PropTypes.string.isRequired,
      systolic: PropTypes.number.isRequired,
      diastolic: PropTypes.number.isRequired,
    })
  ),
};

export default DiagnosisHistory;
