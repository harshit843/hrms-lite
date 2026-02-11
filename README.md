# HRMS Lite

A lightweight Human Resource Management System for managing employee records and tracking daily attendance.

## Overview

This full-stack application demonstrates end-to-end development with a focus on RESTful API design, database modeling, and responsive UI. It serves as a basic internal HR tool for administrative use.

## Features

### Employee Management
- Add new employees with unique ID, name, email, and department
- View and delete employees
- Email validation and duplicate ID prevention

### Attendance Management
- Mark attendance for employees (Present/Absent)
- View attendance records per employee
- Prevent duplicate entries for the same date
- Visual status indicators

## Tech Stack

- **Frontend**: React (Vite), Axios, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM

## Project Structure

```
hrms-lite/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   ├── components/
│   ├── api.js
│   └── App.jsx
└── README.md
```

## API Endpoints

### Employee Routes
| Method | Endpoint          | Description       |
|--------|-------------------|-------------------|
| POST   | /api/employees   | Add new employee  |
| GET    | /api/employees   | Get all employees |
| DELETE | /api/employees/:id | Delete employee   |

### Attendance Routes
| Method | Endpoint                | Description              |
|--------|-------------------------|--------------------------|
| POST   | /api/attendance         | Mark attendance          |
| GET    | /api/attendance/:employeeId | Get attendance for employee |

## Setup and Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/harshit843/hrms-lite.git
   cd hrms-lite
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   - Create a `.env` file with `MONGO_URI=your_mongodb_connection_string`
   - Run: `npm run dev` (Server: http://localhost:5000)

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```
   - Create a `.env` file with `VITE_API_URL=http://localhost:5000/api`
   - Run: `npm run dev` (Frontend: http://localhost:5173)

## Validations and Error Handling

- Required field validation (frontend and backend)
- Email format validation
- Unique employee ID constraints
- Duplicate attendance prevention
- Proper HTTP status codes and meaningful error messages

## UI/UX Highlights

- Clean, structured layout with modular components
- Responsive design with card-based sections
- Loading and error states
- Intuitive navigation and interaction

## Assumptions and Limitations

- Single admin user (no authentication)
- No payroll or leave management features
- Attendance tracked per employee per date
- Designed for demonstration purposes

## Future Improvements

- Dashboard with employee and attendance summaries
- Date and department-based attendance filtering
- Pagination for large datasets
- User authentication and role management

## Conclusion

HRMS Lite showcases practical implementation of full-stack development principles, including RESTful APIs, database relationships, frontend-backend integration, and robust error handling. It features a production-ready architecture suitable for internal HR operations.
