import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import Middlewares from './src/middlewares/Middlewares.js'
import Configuration from './configurations/Configurations.js'

const application = express()
application.use(helmet())
application.use(morgan('common'))

application.use(Middlewares.notFound)
application.use(Middlewares.errorHandler)

Configuration.connectToDatabase()
Configuration.connectToPort(application)