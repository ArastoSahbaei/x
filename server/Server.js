import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import Middlewares from './src/middlewares/Middlewares.js'
import Configuration from './configurations/Configurations.js'
import UserRoutes from './src/routes/User.route.js'
import cors from 'cors'

const application = express()
application.use(express.json())
application.use(cors({ credentials: true }))
application.use(helmet())
application.use(morgan('common'))


UserRoutes.routes(application)
application.use(Middlewares.notFound)
application.use(Middlewares.errorHandler)

Configuration.connectToDatabase()
Configuration.connectToPort(application)