import express, { Request, Response } from "express";
import { RequestBody } from "./models/request.js";
import { top5 } from "./useCases/restaurants/fetch.js";

const app = express();
app.use(express.json());
const port = process.env.PORT || 3223;

app.get("/", (req: Request, res: Response) => {
  const id = req.params.id;
  res.send("API is  Running!");
});

app.post("/", (req: Request, res: Response) => {
  var body: RequestBody;
  body = req.body;
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  //console.log(`Swagger UI available at http://localhost:${port}/swagger`);
});
