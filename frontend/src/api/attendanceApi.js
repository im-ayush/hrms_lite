import client from "./client";

export const getAttendance = () => client.get("attendance/");
export const createAttendance = (data) => client.post("attendance/", data);