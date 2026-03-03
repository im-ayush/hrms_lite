// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// import React from "react";
// import ReactDOM from "react-dom/client";
// import Employees from "./pages/Employees";
// import Attendance from "./pages/Attendance";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <div style={{padding: 40}}>
//     <h1>HRMS Lite</h1>
//     <Employees />
//     <hr />
//     <Attendance />
//   </div>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);