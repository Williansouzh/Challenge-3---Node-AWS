import app from "./app";
import dotenv from "dotenv";
import connectDatabase from "./database/databaseConnect";
dotenv.config();
const PORT = process.env.PORT || 3000;
async function startServer() {
  if (!PORT) {
  }
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`Server running at port: ${PORT}`);
    });
  } catch (error) {
    console.log(`Error at connect database. Error: ${error}`);
  }
}

startServer();
