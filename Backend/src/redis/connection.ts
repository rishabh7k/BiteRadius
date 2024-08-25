import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => console.error("Redis Client Error", err));

(async () => {
  try {
    await client.connect();
    console.log("Redis client connected");
  } catch (error) {
    console.log(`Redis connection failed: ${error}`);
  }
})();

export default client;
