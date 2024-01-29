import app from "./app";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;
function startServer() {
  if (!PORT) {
  }
  app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
  });
}

startServer();
