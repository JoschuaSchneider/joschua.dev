import { Client } from 'faunadb'

const faunaClientSecret = process.env.FAUNADB_CLIENT_SECRET ?? ''

const faunaClient = new Client({
  secret: faunaClientSecret,
  domain: 'db.fauna.com',
  scheme: 'https',
})

export default faunaClient
