import { getOrbisContext } from '@/utils/context.js'
import { Request, Response, NextFunction } from 'express'

export interface CreateValidationRequest extends Request {
  body: {
    assignment_id: number
    loss: number
  }
}

const writeValidation = async (
  req: CreateValidationRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { orbis, table, context } = await getOrbisContext()
    const { assignment_id, loss } = req.body
    const writeValidationUpdate = await orbis
      .insert(table)
      .value({
        task_submission_id: assignment_id,
        data: 'Mocked Data',
        status: 1,
        assigned_at: new Date().toISOString(),
        validated_at: new Date().toISOString(),
        score: loss,
        stake_id: 256,
        validation_phase: 'Completed',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .context(context)
      .run()

    res.locals = {
      ...res.locals,
      validationUpdate: writeValidationUpdate.content ? writeValidationUpdate.content : null,
      streamID: writeValidationUpdate.id ? writeValidationUpdate.id : null,
    }
    return next()
  } catch (error) {
    console.error(error)
    next(error)
  }
}

export const writeController = {
  writeValidation,
}
