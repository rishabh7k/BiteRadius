import client from "./connection.js";
import { SetOptions } from "redis";

const set = async (key: string, value: string) => {
  const options: SetOptions = {};
  options.EX = 600;
  const reply = await client.set(key, value, options);
  return reply;
};

const get = async (key: string) => {
  const value = await client.get(key);
  return value;
};

export const RedisService = {
  get,
  set,
};
