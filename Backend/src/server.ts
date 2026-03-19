import app from "./app";
import { connectDB } from "./config/db";

async function start() {
  await connectDB(); 

  app.listen(3000, () => {
    console.log("Servidor rodando ");
  });
}

start();