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

// ✅ LISTAR
export const getAppointments = (req: Request, res: Response) => {
  const user = (req as any).user;

  const userAppointments = appointments.filter(
    (a) => a.userId === user.id
  );

  res.json(userAppointments);
};


export const deleteAppointment = (req: Request, res: Response) => {
  const { id } = req.params;

  const index = appointments.findIndex(
    (a) => a.id === Number(id)
  );

  if (index === -1) {
    return res.status(404).json({ message: "Não encontrado" });
  }

  appointments.splice(index, 1);

  res.json({ message: "Deletado com sucesso" });
};