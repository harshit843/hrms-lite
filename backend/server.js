const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// connect mongo
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("DB err", err));

app.use("/api/employees", require("./routes/employeeRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));

app.get("/", (req,res)=>res.send("API running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server on ${PORT}`));
