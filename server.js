// server.js
require('dotenv').config();
const app = require('./src/app');
const { connectRedis } = require('./src/config/redisClient');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectRedis();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

startServer();
