import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db"

dotenv.config()

console.log("URI:", process.env.MONGO_URI)

const app = express()

app.use(express.json())

connectDB()

app.listen(3000, () => {
  console.log("Servidor rodando 🚀")
})