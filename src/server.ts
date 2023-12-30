import app from "./app";
import dotenv from "dotenv";
dotenv.config();
const PORT: string | number = process.env.PORT || 3333;
function startServer() {
  app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
}
startServer();
