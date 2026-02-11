import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import Attendance from "./components/Attendance";

function App() {
  return (
    <div>
      <h1>HRMS Lite</h1>
      <EmployeeForm onAdd={()=>window.location.reload()} />
      <EmployeeList />
      <Attendance />
    </div>
  );
}

export default App;
