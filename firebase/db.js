import firebase from 'firebase'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyDcr3pCt1Konti22tUwQMRBgb24e23fVsc',
  authDomain: 'sumin-bohee-marry.firebaseapp.com',
  databaseURL: 'https://sumin-bohee-marry.firebaseio.com',
  projectId: 'sumin-bohee-marry',
  storageBucket: 'sumin-bohee-marry.appspot.com',
  messagingSenderId: '254613876317',
  appId: '1:254613876317:web:d42193bca6d1d5e1a2a7b4',
  measurementId: 'G-0EE6SCKW8K'
})

export const db = firebase.firestore()
export const TIMESTAMP = firebase.database.ServerValue.TIMESTAMP
export const getTimeStamp = () =>
  firebase.firestore.Timestamp.fromDate(new Date())
