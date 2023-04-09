import express from 'express'
import { router } from "./routers/main.router"
import { exception } from './middlewares/error.middleware'
import colors from 'colors'
const { blue } = colors

const app = express()
const PORT = 3000



function start () {
    try {
        app.use(router)
        app.get('/', (req, res) => {
            res.status(200).json('ola')
        })
        
        app.listen(PORT, () => {
            console.log(blue(`[SERVER] success started on port: ${PORT}`))
        })
        app.use(exception)
    } catch (e) {
        console.log(e)
    }
}

start()