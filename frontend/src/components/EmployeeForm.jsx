import { useState } from "react";
import api from "../api";

export default function EmployeeForm({ onAdd }) {
  const [form, setForm] = useState({ employeeId:"", fullName:"", email:"", department:"" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/employees", form);
    onAdd();
    setForm({ employeeId:"", fullName:"", email:"", department:"" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Employee ID" value={form.employeeId} onChange={e=>setForm({...form, employeeId:e.target.value})} />
      <input placeholder="Full Name" value={form.fullName} onChange={e=>setForm({...form, fullName:e.target.value})} />
      <input placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
      <input placeholder="Department" value={form.department} onChange={e=>setForm({...form, department:e.target.value})} />
      <button>Add</button>
    </form>
  );
}
