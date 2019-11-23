import firebase from 'firebase'

import config from './config'

firebase.initializeApp(config.firebaseConfig)

const database = firebase.database()

export const getRef = ref =>
  database.ref(ref)

export const removeData = ref =>
  database.ref(ref).remove()

export const getDataOnce = ref =>
  database.ref(ref).once('value')
