export default async function loadFirebase() {
  const firebase = await import('firebase/app')
  await import('firebase/database')

  try {
    firebase.initializeApp({
      databaseURL: 'https://joschua-dev.firebaseio.com',
    })
  } catch (err) {
    if (!/already exists/u.test(err.message)) {
      console.error('Could not initialize firebase', err.stack)
    }
  }

  return firebase.database()
}
