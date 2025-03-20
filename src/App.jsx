import { useEffect, useState } from "react";

import MedicalDashboard from "./pages/MedicalDashboard";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

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
    <div className="m-3">
      
      <MedicalDashboard data={data} />
    </div>
  );
}

export default App;
