import express, { json, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import writeRouter from './routes/write.js'

const app = express()
const port = process.env.PORT || 8080

const corsOptions = {
  origin: ['*'],
  optionsSuccessStatus: 200, // For legacy browser support
}

app.use(json())
app.use(cors(corsOptions))

const allowCrossDomain = (_req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}

app.use(allowCrossDomain)

app.use('/', writeRouter)

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
