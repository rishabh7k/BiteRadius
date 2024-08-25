import { RequestBody } from "../../shared/request.js";
import express, { Request, Response } from "express";
import { MapsService } from "../../maps/service.js";
const placesRouter = express.Router();

placesRouter.post("/places", async (req: Request, res: Response) => {
  try {
    const body: RequestBody = req.body;
    const _service = new MapsService(body.lat, body.lng, body.type);
    const response = await _service.fetchPlaces();
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send("An error occurred while fetching restaurants");
  }
});

export default placesRouter;
