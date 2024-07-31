import { OrbisDB } from '@useorbis/db-sdk'
import { OrbisKeyDidAuth } from '@useorbis/db-sdk/auth'
import 'dotenv/config.js'

export interface Context {
  orbis: OrbisDB
  table: string
  context: string
}

export const getOrbisContext = async (): Promise<Context> => {
  const INSTANCE_URL: string | undefined = process.env.INSTANCE_URL || ''
  const ENV_ID: string = process.env.ENV_ID || ''
  const CERAMIC_PRIVATE_KEY: string = process.env.CERAMIC_PRIVATE_KEY || ''
  const CERAMIC_URL: string = process.env.CERAMIC_URL || ''
  const TABLE_ID: string | undefined = process.env.TABLE_ID || ''
  const CONTEXT_ID: string | undefined = process.env.CONTEXT_ID || ''

  // instantiate OrbisDB
  const orbis = new OrbisDB({
    ceramic: {
      gateway: CERAMIC_URL,
    },
    nodes: [
      {
        gateway: INSTANCE_URL,
        env: ENV_ID,
      },
    ],
  })

  // connect to OrbisDB
  const auth = await OrbisKeyDidAuth.fromSeed(CERAMIC_PRIVATE_KEY)
  await orbis.connectUser({ auth })

  return { orbis, table: TABLE_ID, context: CONTEXT_ID }
}
