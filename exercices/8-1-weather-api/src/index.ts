import express from 'express'
import { router } from "./routers/main.router"
import { exception } from './middlewares/error.middleware'
import colors from 'colors'
const { blue } = colors

const app = express()
const PORT = 3000



function start () {
    try {
        app.use(express.json())
        app.use(router)
        app.get('/', (req, res) => {
            res.status(200).json('ola')
        })
        app.use(exception)
        
        app.listen(PORT, () => {
            console.log(blue(`[SERVER] success started on port: ${PORT}`))
        })
    } catch (e) {
        console.log(e)
    }
}

start()