import { Request, Response } from "express";

const appointments: any[] = [];

export const createAppointment = (req: Request, res: Response) => {
  const { date, service, cep, address, weather } = req.body;

  const user = (req as any).user;

  const appointment = {
    id: appointments.length + 1,
    userId: user.id,
    date,
    service,
    cep,
    address,
    weather
  };

  appointments.push(appointment);

  res.json(appointment);
};