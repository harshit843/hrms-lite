import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import Attendance from "./components/Attendance";
import "./index.css";

function App() {
  return (
    <div className="container">
      <h1>HRMS Lite Dashboard</h1>

      <div className="card">
        <EmployeeForm />
      </div>

      <div className="card">
        <EmployeeList />
      </div>

      <div className="card">
        <Attendance />
      </div>
    </div>
  );
}

export default App;
