import { getOrbisContext } from '@/utils/context.js'
import { Request, Response, NextFunction } from 'express'

const readValidations = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { orbis, table, context } = await getOrbisContext()
    const validationResults = await orbis.select().from(table).context(context).run()

    res.locals = {
      ...res.locals,
      validations: validationResults.rows.length ? validationResults.rows : null,
    }
    return next()
  } catch (error) {
    console.error(error)
    next(error)
  }
}

export const readController = {
  readValidations,
}
