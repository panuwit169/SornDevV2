import { firebaseAction } from 'vuexfire'
// import Firebase from 'firebase'

export const setListplayRef = firebaseAction(({bindFirebaseRef}, ref) => {
  bindFirebaseRef('listplay', ref)
})
