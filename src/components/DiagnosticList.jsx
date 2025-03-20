const DiagnosticList = ({ diagnostics = [] }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Diagnostic List</h2>

      {diagnostics.length === 0 ? (
        <p className="text-gray-500">No diagnostic records available.</p>
      ) : (
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-600 text-sm">
              <th className="pb-2">Problem/Diagnosis</th>
              <th className="pb-2">Description</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnostics.map((item, index) => (
              <DiagnosticRow key={index} {...item} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

// Diagnostic Row Component
const DiagnosticRow = ({ name, description, status }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "actively being treated":
        return "bg-yellow-100 text-yellow-800";
      case "under observation":
        return "bg-orange-100 text-orange-800";
      case "untreated":
        return "bg-red-100 text-red-800";
      case "cured":
      case "inactive":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <tr className="border-t">
      <td className="py-4 pr-4">
        <div className="font-medium text-gray-800">{name}</div>
      </td>
      <td className="py-4 pr-4 text-sm text-gray-600">{description}</td>
      <td className="py-4">
        <span className={`inline-block px-2 py-1 rounded-md text-xs ${getStatusColor(status)}`}>
          {status}
        </span>
      </td>
    </tr>
  );
};

export default DiagnosticList;
