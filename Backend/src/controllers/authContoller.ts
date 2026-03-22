import { Request, Response } from "express"
import jwt from "jsonwebtoken"

// REGISTER
export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body

  res.json({ message: "Registrado" })
}

// LOGIN
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: "Dados inválidos" })
  }

  const token = jwt.sign(
    { email },
    "segredo",
    { expiresIn: "1h" }
  )

  res.json({ token })
}