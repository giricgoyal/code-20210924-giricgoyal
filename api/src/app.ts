import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import { initRoutes } from './router'
import config from './config'

try {
    const app = express()
    const port: number = parseInt(config.SERVER_PORT as string, 10) || 3000

    app.use(cors())
    app.use(json())
    app.use(
        urlencoded({
            extended: true,
        }),
    )
    app.use(cookieParser())
    app.use(express.json())

    initRoutes(app)

    app.listen(port, () => {
        console.log(`server is listening on ${port}`)
    })
} catch (err) {
    console.log(err)
}
