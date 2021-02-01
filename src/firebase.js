import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDwQLxYQAD-a1oLCFApsE0OL1X1LXH0nJs',
  authDomain: 'dasboard-deae2.firebaseapp.com',
  databaseURL: 'https://dasboard-deae2-default-rtdb.firebaseio.com',
  projectId: 'dasboard-deae2',
  storageBucket: 'dasboard-deae2.appspot.com',
  messagingSenderId: '623460955096',
  appId: '1:623460955096:web:fdf91dba62e808bfa3b8ad',
})

export const auth = app.auth()
export default app
