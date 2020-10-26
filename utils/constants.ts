export const DEPLOYMENT_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://joschua.dev'
    : 'http://localhost:3000'
