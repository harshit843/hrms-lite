import { useState, useEffect } from "react";
import api from "../api";

export default function Attendance() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    employee: "",
    date: "",
    status: "Present"
  });

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await api.get("/employees");
      setEmployees(res.data);
    };
    fetchEmployees();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/attendance", form);
    alert("Attendance marked");
  };

  return (
    <div>
      <h2>Mark Attendance</h2>
      <form onSubmit={handleSubmit}>
        <select
          onChange={(e) => setForm({ ...form, employee: e.target.value })}
        >
          <option>Select Employee</option>
          {employees.map(emp => (
            <option key={emp._id} value={emp._id}>
              {emp.fullName}
            </option>
          ))}
        </select>

        <input
          type="date"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <select
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>

        <button type="submit">Mark</button>
      </form>
    </div>
  );
}
