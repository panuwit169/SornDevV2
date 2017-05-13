import { firebaseAction } from 'vuexfire'

export const setListplayRef = firebaseAction(({bindFirebaseRef}, ref) => {
  bindFirebaseRef('listplay', ref)
})
