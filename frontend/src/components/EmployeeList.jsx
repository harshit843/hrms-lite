import { useEffect, useState } from "react";
import api from "../api";

export default function EmployeeList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await api.get("/employees");
        setList(res.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employees</h2>
      {list.length === 0 ? (
        <p>No employees found</p>
      ) : (
        list.map(emp => (
          <div key={emp._id}>
            {emp.fullName} - {emp.department}
          </div>
        ))
      )}
    </div>
  );
}
