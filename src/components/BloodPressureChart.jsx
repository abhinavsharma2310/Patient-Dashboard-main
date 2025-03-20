import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";

const BloodPressureChart = ({ diagnosisHistory }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [timeRange, setTimeRange] = useState("6months");

  useEffect(() => {
    processData();
  }, [timeRange, diagnosisHistory]);

  const processData = () => {
    let monthsToInclude = 6;
    if (timeRange === "1year") monthsToInclude = 12;
    if (timeRange === "all") monthsToInclude = diagnosisHistory.length;

    const sortedData = diagnosisHistory
      .slice(-monthsToInclude)
      .map((entry) => ({
        month: `${entry.month}, ${entry.year}`,
        systolic: entry.blood_pressure.systolic.value,
        diastolic: entry.blood_pressure.diastolic.value,
      }));

    setFilteredData(sortedData);
  };

  const latestEntry = diagnosisHistory[diagnosisHistory.length - 1] || { blood_pressure: { systolic: { value: 0 }, diastolic: { value: 0 } } };
  const currentSystolic = latestEntry.blood_pressure.systolic.value;
  const currentDiastolic = latestEntry.blood_pressure.diastolic.value;

  return (
    <div className="w-full p-4 bg-gray-50 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Blood Pressure</h2>
        <div className="relative">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="text-gray-600 border border-gray-300 rounded-md px-3 py-1"
          >
            <option value="6months">Last 6 months</option>
            <option value="1year">Last 1 year</option>
            <option value="all">All Data</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={filteredData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[40, 180]} />
              <Tooltip />
              <Line type="monotone" dataKey="systolic" stroke="#ec4899" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="diastolic" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="md:w-1/3 ml-4 mt-4 md:mt-0">
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 rounded-full bg-pink-500 mr-2"></div>
              <span className="text-lg text-gray-600">Systolic</span>
            </div>
            <div className="flex items-center">
              <span className="text-4xl font-bold text-gray-800">{currentSystolic}</span>
              <div className="ml-2 flex items-center text-gray-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
                <span className="ml-1">Higher than Average</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 rounded-full bg-purple-500 mr-2"></div>
              <span className="text-lg text-gray-600">Diastolic</span>
            </div>
            <div className="flex items-center">
              <span className="text-4xl font-bold text-gray-800">{currentDiastolic}</span>
              <div className="ml-2 flex items-center text-gray-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
                <span className="ml-1">Lower than Average</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureChart;
