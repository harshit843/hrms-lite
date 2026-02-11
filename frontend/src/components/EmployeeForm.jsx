import { useState } from "react";
import api from "../api";

export default function EmployeeForm({ onAdd }) {
  const [form, setForm] = useState({
    employeeId: "",
    fullName: "",
    email: "",
    department: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic frontend validation
    if (!form.employeeId || !form.fullName || !form.email || !form.department) {
      setError("All fields are required.");
      return;
    }

    try {
      setLoading(true);

      await api.post("/employees", form);

      setForm({
        employeeId: "",
        fullName: "",
        email: "",
        department: ""
      });

      if (onAdd) onAdd();

    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
      >
        <input
          placeholder="Employee ID"
          value={form.employeeId}
          onChange={(e) =>
            setForm({ ...form, employeeId: e.target.value })
          }
        />

        <input
          placeholder="Full Name"
          value={form.fullName}
          onChange={(e) =>
            setForm({ ...form, fullName: e.target.value })
          }
        />

        <input
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          placeholder="Department"
          value={form.department}
          onChange={(e) =>
            setForm({ ...form, department: e.target.value })
          }
        />

        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? "Adding..." : "Add Employee"}
        </button>
      </form>

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
      )}
    </div>
  );
}
