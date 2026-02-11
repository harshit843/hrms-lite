import { useEffect, useState } from "react";
import api from "../api";

export default function Attendance() {
  const [employees, setEmployees] = useState([]);
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({
    employee: "",
    date: "",
    status: "Present"
  });

  const [message, setMessage] = useState("");

  // Fetch employees
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await api.get("/employees");
        setEmployees(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEmployees();
  }, []);

  // Fetch attendance
  const fetchAttendance = async () => {
    if (!form.employee) return;

    try {
      const res = await api.get(`/attendance/${form.employee}`);
      setRecords(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, [form.employee]);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage("");

  if (!form.employee || !form.date || !form.status) {
    setMessage("All fields required");
    return;
  }

  try {
    const res = await api.post("/attendance", form);
    setMessage("Attendance marked successfully");
    fetchAttendance();
  } catch (err) {
    console.log("Backend error:", err.response?.data);
    setMessage(err.response?.data?.message || "Server Error");
  }
};


  return (
    <div>
      <h2>Attendance Management</h2>

      {/* Attendance Form */}
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
      >
        <select
          value={form.employee}
          onChange={(e) =>
            setForm({ ...form, employee: e.target.value })
          }
        >
          <option value="">Select Employee</option>
          {employees.map((emp) => (
            <option key={emp._id} value={emp._id}>
              {emp.fullName} ({emp.department})
            </option>
          ))}
        </select>

        <input
          type="date"
          value={form.date}
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
        />

        <select
          value={form.status}
          onChange={(e) =>
            setForm({ ...form, status: e.target.value })
          }
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>

        <button type="submit" className="btn-primary">
          Mark Attendance
        </button>
      </form>

      {message && (
        <p style={{ marginTop: "10px" }}>{message}</p>
      )}

      {/* Attendance Records */}
      <div style={{ marginTop: "20px" }}>
        <h3>Attendance Records</h3>

        {records.length === 0 ? (
          <p>No attendance records</p>
        ) : (
          records.map((rec) => (
            <div key={rec._id}>
              {new Date(rec.date).toLocaleDateString()} —{" "}
              <strong>{rec.status}</strong>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
