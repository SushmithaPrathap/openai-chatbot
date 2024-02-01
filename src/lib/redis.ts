import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: process.env.REDIS_URL!, //! says typescript that we know it exists!
  token: process.env.REDIS_SECRET!,
});
