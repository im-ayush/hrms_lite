import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>HRMS Lite</h1>
      <h2>Home</h2>

      <div>
        <Link to="/employee">
          <h3>Employee Management</h3>
        </Link>

        <Link to="/attendance">
          <h3>Attendance Management</h3>
        </Link>
      </div>
    </div>
  );
}