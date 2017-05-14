import { firebaseAction } from 'vuexfire'

export const setListplayRef = firebaseAction(({bindFirebaseRef}, ref) => {
  bindFirebaseRef('listplay', ref)
})

export const setListbookRef = firebaseAction(({bindFirebaseRef}, ref) => {
  bindFirebaseRef('listbook', ref)
})
