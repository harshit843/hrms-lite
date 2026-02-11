import { useEffect, useState } from "react";
import api from "../api";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const res = await api.get("/employees");
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employees</h2>
      {employees.map(emp => (
        <div key={emp._id}>
          {emp.fullName} - {emp.department}
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;
