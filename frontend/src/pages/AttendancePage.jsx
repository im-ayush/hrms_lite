import { useEffect, useState } from "react";
import { getEmployees } from "../api/employeeApi";
import { getAttendance } from "../api/attendanceApi";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceTable from "../components/AttendanceTable";

export default function AttendancePage() {
  const [employees, setEmployees] = useState([]);
  const [records, setRecords] = useState([]);

  const loadData = async () => {
    const empRes = await getEmployees();
    const attRes = await getAttendance();
    setEmployees(empRes.data);
    setRecords(attRes.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h2>Attendance Management</h2>
      <AttendanceForm
        employees={employees}
        onSuccess={loadData}
      />
      <AttendanceTable records={records} />
    </div>
  );
}