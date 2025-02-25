// src/controllers/dataController.js
const { redisClient } = require('../config/redisClient');
const { fetchExternalData } = require('../services/dataService');

const EXPIRATION_TIME = process.env.REDIS_EXPIRATION_TIME || 3600; // 1 hour if not time proivided
const CACHE_KEY_PREFIX = process.env.REDIS_CACHE_KEY_PREFIX || 'weather_data';


const getData = async (req, res) => {
    
    const longitude = req.query.longitude;
    const latitude = req.query.latitude;

    if (!longitude || !latitude) {
        return res.status(400).json({ message: 'Longitude and Latitude are required' });
    }

    try {

        // Check Redis cache
        const cacheKey = `${CACHE_KEY_PREFIX}_${latitude}_${longitude}`;
        const cachedData = await redisClient.get(cacheKey);
        if (cachedData) {
            console.log('Serving from Redis Cache');
            return res.status(200).json(JSON.parse(cachedData));
        }

        // Fetch from external API if not cached
        console.log('Fetching from external API');
        const data = await fetchExternalData(longitude, latitude);

        // Store in Redis with EXPIRATION_TIME expiration
        await redisClient.setEx(cacheKey, EXPIRATION_TIME, JSON.stringify(data));
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getData };
