import express from 'express'
import { WeatherRouter } from './weather.router'

const router = express()

router.use('/weather', WeatherRouter)


export { router }