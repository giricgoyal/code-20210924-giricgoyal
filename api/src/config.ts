import * as dotenv from 'dotenv'

dotenv.config()

const { SERVER_PORT, DATABASE_SERVICE_URL } = process.env

export default {
    DATABASE_V1_URL: `${DATABASE_SERVICE_URL}/v1`,
    SERVER_PORT,
}
