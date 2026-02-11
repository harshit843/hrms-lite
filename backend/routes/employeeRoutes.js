const express = require("express");
const Employee = require("../models/Employee");
const router = express.Router();

// Add new employee
router.post("/", async (req, res) => {
  try {
    const { employeeId, fullName, email, department } = req.body;
    if (!employeeId || !fullName || !email || !department) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existing = await Employee.findOne({ employeeId });
    if (existing) return res.status(400).json({ message: "Employee already exists" });
    const emp = await Employee.create({ employeeId, fullName, email, department });
    res.status(201).json(emp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all employees
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete an employee
router.delete("/:id", async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
