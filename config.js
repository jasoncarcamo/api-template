require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 8000,
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV || 'development',    
    JWT_SECRET: process.env.TEST_JWT_SECRET,
};