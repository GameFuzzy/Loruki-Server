import fs from 'fs-extra'
import path from 'path'
import { printSchema } from 'graphql'

import Schema from '../schema'

async function buildSchema() {
  await fs.ensureFile('../data/schema.graphql')

  fs.writeFileSync(
    path.join(__dirname, '../data/schema.graphql'),
    printSchema(Schema, { commentDescriptions: true })
  )

  console.log('Successfully built schema!')
}

buildSchema().catch((e) => {
  throw new Error('Could not build schema: ' + e.message)
})
