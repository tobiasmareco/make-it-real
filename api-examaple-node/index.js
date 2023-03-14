import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { conectDatabase } from "./src/config/db.config.js";
import { ErrorHanling } from "./src/middlewares/ErrorHandling.js";
import { router } from "./src/routes/index.routes.js";
import authRouter from "./src/Auth/auth.routes.js";
dotenv.config();
const app = express();

conectDatabase();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(authRouter);
app.use(ErrorHanling);

app.listen(process.env.API_SERVER_PORT, () => {
  console.log(`listening on port 3080 http://localhost:3080/api`);
});
