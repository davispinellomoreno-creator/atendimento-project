import api from "./api";

export const getAppointments = () => api.get("/appointments");

export const createAppointment = (data: any) =>
  api.post("/appointments", data);

export const deleteAppointment = (id: string) =>
  api.delete(`/appointments/${id}`);