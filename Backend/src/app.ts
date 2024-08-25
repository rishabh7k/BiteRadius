import express, { Request, Response } from "express";
import placesRouter from "./useCases/places/service.js";
import { middleware } from "./middleware/index.js";
import * as dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
const port = process.env.PORT || 3223;

app.use(middleware);
app.use("/fetch", placesRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to API");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
