import { RequestHandler, Request, Response, Router } from 'express'
import { writeController } from '@/controllers/writeController.js'

const writeRouter: Router = Router()

type R = Response & {
  locals: {
    validationUpdate: unknown
    streamID: string
  }
}

writeRouter.post(
  '/write',
  writeController.writeValidation as RequestHandler,
  (_req: Request, res: R) => {
    return res.json({
      validationUpdate: res.locals.validationUpdate,
      streamID: res.locals.streamID,
    })
  },
)

export default writeRouter
