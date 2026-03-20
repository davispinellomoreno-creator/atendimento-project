import api from "./api"

export const getAppointments = () => api.get("/appointments")

export const createAppointment = (data: any) =>
  api.post("/appointments", data)

export const updateStatus = (id: string, status: string) =>
  api.put(`/appointments/${id}`, { status })

export const deleteAppointment = (id: string) =>
  api.delete(`/appointments/${id}`)