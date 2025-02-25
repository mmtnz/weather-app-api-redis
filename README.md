# 🌤️ Weather REST API with Redis Caching

This is a simple REST API that fetches weather data from a third-party weather API and uses **Redis** for in-memory caching. The purpose of this project is to practice integrating Redis for caching responses to reduce redundant external API calls and improve performance.

---

## 🚀 Features

- Fetches weather data based on the requested coordinates (latitude, longitude).
- Caches weather data using Redis with an expiration time (TTL).
- Reduces third-party API calls by serving cached responses when available.
- Simple and clean REST API endpoints.
- You can use [weather app frontend](https://github.com/mmtnz/weather-app-frontend) for a frindly UI to see the api responses.

---

## 🛠️ Technologies Used

- **Node.js** (Express.js for the server)
- **Redis** (for caching)

---

## 🚀 Getting Started

### 🔧 Prerequisites
- Node.js and npm installed

### 📥 Installation Steps
Follow these steps to set up the project locally:

#### 1. **Clone the repository:**
```bash
git clone https://https://github.com/mmtnz/weather-app-api-redis.git
cd wweather-app-api-redis
```

#### 2. **Install dependencies:**
```bash
npm install
```

#### 3. **Configure Environment Variables:**
```bash
PORT=your_custom_port
REDIS_URL=redis://localhost:6379
REDIS_CACHE_EXPIRATION=seconds_you_want_to_keep_data_in_cache
REDIS_CACHE_KEY_PREFIX=apiWeatherData
API_WEATHER_URL=https://api.open-meteo.com/v1/forecast
```

#### 4️. **Run the application**
```bash
node server.js
```

#### 5. **Try the app**
You can use applications as **Postman** or use any of your browsers. Check below the endpoints.

#### 6. **(Optional) Use the UI to visualise the data**

Visit [weather app frontend](https://github.com/mmtnz/weather-app-frontend) for more information.

---

## 🌐 API Endpoint
### GET `/data?latitude={latitude}&longitude={longitude}`
🔍 Description:
Fetches weather data for the specified coordinates. The API will:

Check if the weather data for the coordinates exists in Redis.
If cached, return the data from Redis.
If not cached, fetch from the third-party API, cache the result, and return the data.

### 💡 Response (JSON):
```bash
{
    "latitude": 50,
    "longitude": 10,
    "generationtime_ms": 0.1271963119506836,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 291,
    "hourly_units": {
        "time": "iso8601",
        "temperature_2m": "°C",
        "weather_code": "wmo code",
        "precipitation_probability": "%"
    },
    "hourly": {
        "time": [
            "2025-02-25T00:00",
            "2025-02-25T01:00",
            "2025-02-25T02:00",
            "..."
            "2025-03-03T22:00",
            "2025-03-03T23:00"
        ],
        "temperature_2m": [
            6.8,
            7.6,
            7.4,
            "..."
            1.6,
            1
        ],
        "weather_code": [
            61,
            61,
            61,
            "...",
            3,
            3
        ],
        "precipitation_probability": [
            78,
            88,
            88,
            "..."
            7,
            8
        ]
    },
    "daily_units": {
        "time": "iso8601",
        "temperature_2m_max": "°C",
        "temperature_2m_min": "°C",
        "weather_code": "wmo code",
        "precipitation_probability_mean": "%"
    },
    "daily": {
        "time": [
            "2025-02-25",
            "2025-02-26",
            "2025-02-27",
            "2025-02-28",
            "2025-03-01",
            "2025-03-02",
            "2025-03-03"
        ],
        "temperature_2m_max": [
            10.8,
            7.5,
            6.1,
            5.7,
            7.3,
            9.9,
            8.8
        ],
        "temperature_2m_min": [
            5.2,
            1.3,
            -0.7,
            -0.3,
            -2,
            -0.1,
            -2.7
        ],
        "weather_code": [
            61,
            80,
            61,
            85,
            45,
            3,
            3
        ],
        "precipitation_probability_mean": [
            37,
            18,
            25,
            12,
            6,
            4,
            7
        ]
    }
}
```

### 🐛 Error Handling
- 400 Bad request: If latitude and/or longitude are not provided or wrong.
- 500 Internal Server Error: For any unexpected server errors.

## 🎯 Project Purpose
This dummy REST API was built solely for practicing:

- Redis integration for caching.
- Reducing latency and external API calls.
- Efficient REST API design with Node.js.

## ⚖️ License
This project is licensed under the MIT License.

---

## Acknowledgments

- Open Meteo API

---