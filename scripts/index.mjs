import { OrbisKeyDidAuth } from '@useorbis/db-sdk/auth'

const seed = await OrbisKeyDidAuth.generateSeed('hex')

// eslint-disable-next-line no-undef
console.log('Seed: ', seed)
