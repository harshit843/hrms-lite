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
      <div className="empty-state">No employees added yet.</div>
    ) : (
      list.map((emp) => (
        <div key={emp._id} className="employee-item">
          <div>
            <strong>{emp.fullName}</strong>
            <div style={{ fontSize: "14px", color: "#666" }}>
              {emp.email} | {emp.department}
            </div>
          </div>

          <button
            className="btn-danger"
            onClick={() => handleDelete(emp._id)}
          >
            Delete
          </button>
        </div>
      ))
    )}
  </div>
);

}
