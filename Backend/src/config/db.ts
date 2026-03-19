import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(
"mongodb+srv://davirafaia_db_user:<20071918>@username.gap4vgh.mongodb.net/?appName=username"
    );

    console.log("MongoDB conectado 🚀");
  } catch (error) {
   console.error("❌ Erro ao conectar no MongoDB:");
console.error(error);
  }
}