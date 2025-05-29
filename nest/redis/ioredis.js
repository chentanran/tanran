import Redis from "ioredis";

const redis = new Redis({
  host: 'localhost',
  port: 6379,
  password: '123456'
});

const res = await redis.keys('*');

console.log(res);
