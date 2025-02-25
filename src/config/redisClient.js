// src/config/redisClient.js
const { createClient } = require('redis');
require('dotenv').config();

const redisClient = createClient({
    url: process.env.REDIS_URL,
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

const connectRedis = async () => {
    try {
        await redisClient.connect();
        await redisClient.flushDb(); // Clears current DB
        console.log('Connected to Redis');
    } catch (error) {
        console.error('Redis connection failed:', error);
    }
};

module.exports = { redisClient, connectRedis };
