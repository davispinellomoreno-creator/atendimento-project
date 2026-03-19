import { Request, Response } from "express";
import jwt from "jsonwebtoken";


const users: any[] = [];

export const register = (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const user = {
    id: users.length + 1,
    name,
    email,
    password
  };

  users.push(user);

  res.json(user);
};

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Usuário inválido" });
  }

  
  const token = jwt.sign(
    { id: user.id, email: user.email },
    "segredo",
    { expiresIn: "1h" }
  );

  res.json({ token });
};