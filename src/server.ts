import app from "./app";
import dotenv from "dotenv";
import connectDatabase from "./database/connect";
dotenv.config();
const PORT: string | number = process.env.PORT || 3333;
async function startServer() {
  try {
    await connectDatabase();
    app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
  } catch (error) {
    console.error(
      "Error connecting to the database:",
      (error as Error).message
    );
    process.exit(1);
  }
}
startServer();
