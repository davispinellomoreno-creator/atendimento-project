import mongoose from "mongoose"

export async function connectDB() {
  try {
    console.log("URI:", process.env.MONGO_URI)

    await mongoose.connect(process.env.MONGO_URI!)

    console.log("✅ MongoDB conectado ")
  } catch (error) {
    console.log("❌ Erro ao conectar:", error)
  }
}