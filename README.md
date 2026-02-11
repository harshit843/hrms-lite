# HRMS Lite

A streamlined Human Resource Management System designed for efficient employee record management and daily attendance tracking.

## Overview

This full-stack application exemplifies modern web development practices, emphasizing RESTful API architecture, relational database design, and responsive user interfaces. It functions as an essential administrative tool for human resource operations.

## Features

### Employee Management
- Create employee profiles with unique identifiers, personal details, and departmental assignments
- Retrieve and remove employee records
- Enforce email format validation and prevent duplicate employee IDs

### Attendance Management
- Record daily attendance status (Present/Absent) for employees
- Access historical attendance data per employee
- Enforce single-entry policy per date to avoid duplicates
- Provide visual indicators for attendance status

## Technology Stack

- **Frontend**: React (Vite), Axios, Custom CSS
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
| Method | Endpoint              | Description          |
|--------|-----------------------|----------------------|
| POST   | `/api/employees`     | Create new employee  |
| GET    | `/api/employees`     | Retrieve all employees |
| DELETE | `/api/employees/:id` | Remove employee      |

### Attendance Routes
| Method | Endpoint                      | Description                    |
|--------|-------------------------------|--------------------------------|
| POST   | `/api/attendance`            | Record attendance              |
| GET    | `/api/attendance/:employeeId` | Fetch employee attendance      |

## Prerequisites

- Node.js (v14 or higher)
- MongoDB instance (local or cloud)
- npm or yarn package manager

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/harshit843/hrms-lite.git
   cd hrms-lite
   ```

2. **Backend Configuration**
   ```bash
   cd backend
   npm install
   ```
   - Configure environment variables in `.env`:
     ```
     MONGO_URI=your_mongodb_connection_string
     ```
   - Launch the server:
     ```bash
     npm run dev
     ```
     Server accessible at `http://localhost:5000`

3. **Frontend Configuration**
   ```bash
   cd ../frontend
   npm install
   ```
   - Configure environment variables in `.env`:
     ```
     VITE_API_URL=http://localhost:5000/api
     ```
   - Launch the application:
     ```bash
     npm run dev
     ```
     Application accessible at `http://localhost:5173`

## Validation and Error Handling

- Comprehensive field validation across frontend and backend layers
- Email format verification
- Unique employee ID enforcement
- Duplicate attendance entry prevention
- Standardized HTTP status codes with descriptive error messages

## User Interface and Experience

- Organized layout utilizing modular, reusable components
- Responsive design optimized for various device sizes
- Integrated loading and error state management
- Intuitive navigation and user interactions

## Assumptions and Limitations

- Operates under single administrator access (authentication not implemented)
- Excludes payroll and leave management functionalities
- Attendance recording limited to one entry per employee per date
- Optimized for demonstration and evaluation scenarios

## Potential Enhancements

- Implementation of summary dashboards displaying key metrics
- Advanced filtering capabilities for attendance records
- Data pagination for handling large datasets
- Integration of user authentication and role-based access control

## Summary

HRMS Lite demonstrates the application of core full-stack development methodologies, encompassing RESTful API design, database schema optimization, seamless frontend-backend integration, and comprehensive error management. The system is architected with production-grade standards, ideal for supporting internal human resource workflows.
