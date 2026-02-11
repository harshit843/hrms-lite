import { useEffect, useState, useMemo } from "react";
import api from "../api";

export default function Attendance() {
  const [attendance, setAttendance] = useState([]);
  const [filterDate, setFilterDate] = useState("");
  const [filterDept, setFilterDept] = useState("");

  // Fetch attendance
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const res = await api.get("/attendance");
        setAttendance(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAttendance();
  }, []);

  // Get unique departments for filter dropdown
  const departments = useMemo(() => {
    const depts = attendance.map(
      (rec) => rec.employeeId?.department
    );
    return [...new Set(depts)];
  }, [attendance]);

  // Filter logic
  const filteredAttendance = attendance.filter((rec) => {
    const recordDate = new Date(rec.date)
      .toISOString()
      .split("T")[0];

    const matchDate = filterDate
      ? recordDate === filterDate
      : true;

    const matchDept = filterDept
      ? rec.employeeId?.department === filterDept
      : true;

    return matchDate && matchDept;
  });

  return (
    <div>
      <h2>Attendance Records</h2>

      {/* Filters */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />

        <select
          value={filterDept}
          onChange={(e) => setFilterDept(e.target.value)}
        >
          <option value="">All Departments</option>
          {departments.map((dept, index) => (
            <option key={index} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        <button
          className="btn-primary"
          onClick={() => {
            setFilterDate("");
            setFilterDept("");
          }}
        >
          Clear Filters
        </button>
      </div>

      {/* Attendance List */}
      {filteredAttendance.length === 0 ? (
        <div className="empty-state">
          No records found.
        </div>
      ) : (
        filteredAttendance.map((rec) => (
          <div key={rec._id} className="card">
            <h4>{rec.employeeId?.fullName}</h4>

            <p style={{ fontSize: "14px", color: "#666" }}>
              Department: {rec.employeeId?.department}
            </p>

            <p>
              Date:{" "}
              {new Date(rec.date).toLocaleDateString()}
            </p>

            <p>
              Status:{" "}
              {rec.status === "Present" ? (
                <span style={{ color: "green", fontWeight: "bold" }}>
                  Present ✅
                </span>
              ) : (
                <span style={{ color: "red", fontWeight: "bold" }}>
                  Absent ❌
                </span>
              )}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
