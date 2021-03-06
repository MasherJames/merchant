import dotenv from 'dotenv';

dotenv.config();

module.exports = {
    "development": {
        url: process.env.DATABASE_URL,
        "dialect": "postgres"
    },
    "test": {
        url: process.env.DATABASE_URL_TEST,
        "dialect": "postgres"
    }
}