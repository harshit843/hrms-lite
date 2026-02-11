import { useState } from "react";
import api from "../api";

function EmployeeForm({ refresh }) {
  const [form, setForm] = useState({
    employeeId: "",
    fullName: "",
    email: "",
    department: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/employees", form);
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Employee ID" onChange={e => setForm({...form, employeeId:e.target.value})} />
      <input placeholder="Full Name" onChange={e => setForm({...form, fullName:e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})} />
      <input placeholder="Department" onChange={e => setForm({...form, department:e.target.value})} />
      <button>Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
