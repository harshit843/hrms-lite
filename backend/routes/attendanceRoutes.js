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

    const attendance = await Attendance.create(req.body);
    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get attendance by employee
router.get("/:employeeId", async (req, res) => {
  try {
    const records = await Attendance.find({ employee: req.params.employeeId })
      .populate("employee");
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
