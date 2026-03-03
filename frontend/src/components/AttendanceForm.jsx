import { useState } from "react";
import { createAttendance } from "../api/attendanceApi";

export default function AttendanceForm({ employees, onSuccess }) {
  const [form, setForm] = useState({
    employee: "",
    date: "",
    status: "Present",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAttendance(form);
    setForm({ employee: "", date: "", status: "Present" });
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={form.employee}
        onChange={(e) =>
          setForm({ ...form, employee: e.target.value })
        }
        required
      >
        <option value="">Select Employee</option>
        {employees.map((emp) => (
          <option key={emp.id} value={emp.id}>
            {emp.full_name}
          </option>
        ))}
      </select>

      <input
        type="date"
        value={form.date}
        onChange={(e) =>
          setForm({ ...form, date: e.target.value })
        }
        required
      />

      <select
        value={form.status}
        onChange={(e) =>
          setForm({ ...form, status: e.target.value })
        }
      >
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>

      <button type="submit">Mark Attendance</button>
    </form>
  );
}