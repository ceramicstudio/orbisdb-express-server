import { RequestHandler, Request, Response, Router } from 'express'
import { writeController } from '@/controllers/writeController.js'
import { readController } from '@/controllers/readController.js'

const router: Router = Router()

type PostResponse = Response & {
  locals: {
    validationUpdate: unknown
    streamID: string
  }
}

type ReadResponse = Response & {
  locals: {
    validations: unknown
  }
}

router.post(
  '/write',
  writeController.writeValidation as RequestHandler,
  (_req: Request, res: PostResponse) => {
    return res.json({
      validationUpdate: res.locals.validationUpdate,
      streamID: res.locals.streamID,
    })
  },
)

router.get(
  '/read',
  readController.readValidations as RequestHandler,
  (_req: Request, res: ReadResponse) => {
    return res.json({
      validations: res.locals.validations,
    })
  },
)

export default router
