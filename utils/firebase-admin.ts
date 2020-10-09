import * as admin from 'firebase-admin'

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      projectId: 'joschua-dev',
    }),
    databaseURL: 'https://joschua-dev.firebaseio.com/',
  })
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error('Could not initialize firebase admin', err.stack)
  }
}

export default admin.database()
