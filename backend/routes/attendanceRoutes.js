const express = require("express");
const Attendance = require("../models/Attendance");
const router = express.Router();

// Mark attendance
router.post("/", async (req, res) => {
  try {
    const { employeeId, date, status } = req.body;

    if (!employeeId || !date || !status) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existing = await Attendance.findOne({
      employeeId,
      date,
    });

    if (existing) {
      return res.status(400).json({
        message: "Attendance already marked for this date",
      });
    }

    const attendance = await Attendance.create({
      employeeId,
      date,
      status,
    });

    res.status(201).json(attendance);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all attendance
router.get("/", async (req, res) => {
  try {
    const records = await Attendance.find()
      .populate("employeeId");

    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get attendance by employee
router.get("/:employeeId", async (req, res) => {
  try {
    const records = await Attendance.find({
      employeeId: req.params.employeeId,
    }).populate("employeeId");

    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
