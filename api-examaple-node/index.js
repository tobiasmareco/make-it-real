import express from "express";
import { conectDatabase } from "./src/config/db.config.js";
import { ErrorHanling } from "./src/middlewares/ErrorHandling.js";
import { router } from "./src/routes/index.routes.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

conectDatabase();

app.use(express.json());

app.use(router);
app.use(ErrorHanling);

app.listen(process.env.API_SERVER_PORT, () => {
  console.log(`listening on port 3080 http://localhost:3080/api`);
});
