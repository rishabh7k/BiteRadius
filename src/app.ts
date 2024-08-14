import express, { Request, Response } from "express";
import { RequestBody } from "./useCases/restaurants/models/request.js";
import restRouter from "./useCases/restaurants/service.js";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT || 3223;

app.post("/fetch", restRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
