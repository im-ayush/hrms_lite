import client from "./client";

export const getEmployees = () => client.get("employees/");
export const createEmployee = (data) => client.post("employees/", data);
export const deleteEmployee = (id) => client.delete(`employees/${id}/`);