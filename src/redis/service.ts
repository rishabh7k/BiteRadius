import client from "./connection.js";

const set = async (key: string, value: string) => {
  const reply = await client.set(key, value);
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
