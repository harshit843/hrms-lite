import { useEffect, useState } from "react";
import api from "../api";

export default function EmployeeList({ refresh }) {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const res = await api.get("/employees");
      setEmployees(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [refresh]);

  return (
    <div>
      <h2>Employee List</h2>

      {employees.length === 0 ? (
        <p>No employees found</p>
      ) : (
        employees.map((emp) => (
          <div key={emp._id}>
            <strong>{emp.fullName}</strong> | {emp.department} | {emp.email}
          </div>
        ))
      )}
    </div>
  );
}
