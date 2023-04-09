import OpenWeatherAPI from "openweather-api-node"
import express, { NextFunction, Request, Response } from 'express'
import { body } from 'express-validator'
import { validation } from "../middlewares/error.middleware"

const Weather = new OpenWeatherAPI({ key: '89d7e8484d67a5cbe46a52a1b5239423' })
const WeatherRouter = express()

WeatherRouter.get('/', 
    (req, res, next) => {
        try {
            return res.json(1)
        } catch (e) {
            next(e)	
        }
    }
)

WeatherRouter.post('/',
    body('city').notEmpty().withMessage('city is empty'),
    validation,
    (req: Request, res: Response, next: NextFunction) => {
        try {
            let { location } = req.body
            
            console.log(location)
            return res.json(1)
        } catch (e) {
            next(e)
        }
    }
)


export { WeatherRouter }