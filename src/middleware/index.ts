import { Request, Response, NextFunction } from "express";
import express from "express";
import crypto from "crypto";
import { RedisService } from "../redis/service.js";

export const middleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cacheKey = generateCacheKey(req);

  try {
    const cachedResponse = await RedisService.get(cacheKey);
    if (cachedResponse) {
      const { statusCode, data } = JSON.parse(cachedResponse);
      return res.status(statusCode).json(data);
    }

    const originalJson = res.json;
    res.json = function (body: any) {
      const responseData = JSON.stringify({
        statusCode: res.statusCode,
        data: body,
      });
      RedisService.set(cacheKey, responseData);
      return originalJson.call(this, body);
    };

    next();
  } catch (error) {
    console.error("Cache error:", error);
    next();
  }
};
function generateCacheKey(req: express.Request): string {
  const { method, url, body } = req;
  const hash = crypto
    .createHash("md5")
    .update(JSON.stringify(body))
    .digest("hex");
  return `${method}:${url}:${hash}`;
}
