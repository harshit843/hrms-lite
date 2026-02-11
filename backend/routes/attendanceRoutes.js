const express = require("express");
const Attendance = require("../models/Attendance");
const router = express.Router();

// Mark attendance
router.post("/", async (req, res) => {
  try {
    const { employee, date, status } = req.body;
    if (!employee || !date || !status) {
      return res.status(400).json({ message: "All fields required" });
    }
    const att = await Attendance.create({ employee, date, status });
    res.status(201).json(att);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get attendance for an employee
router.get("/:employeeId", async (req, res) => {
  try {
    const records = await Attendance.find({ employee: req.params.employeeId }).populate("employee");
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
