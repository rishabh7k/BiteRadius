import { RequestBody } from "./models/request.js";
import express, { Request, Response } from "express";
import { mapsService } from "../../maps/service.js";

const restRouter = express.Router();

restRouter.post("/restaurants", async (req: Request, res: Response) => {
  try {
    const body: RequestBody = req.body;
    await mapsService.fetchRestaurants(body);
    res.status(200).send("Restaurants fetched successfully");
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    res.status(500).send("An error occurred while fetching restaurants");
  }
});

export default restRouter;
