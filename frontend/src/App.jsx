import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import Attendance from "./components/Attendance";
import "./index.css";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="container">
      <h1>HRMS Lite Dashboard</h1>

      <div className="card">
        <EmployeeForm onAdd={handleRefresh} />
      </div>

      <div className="card">
        <EmployeeList refresh={refresh} />
      </div>

      <div className="card">
        <Attendance />
      </div>
    </div>
  );
}

export default App;
