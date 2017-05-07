import Vue from 'vue'
import Firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyDzZeuk5iAFxBciQ1mDErvqe1UZF15Rf5c',
  authDomain: 'sorndev.firebaseapp.com',
  databaseURL: 'https://sorndev.firebaseio.com',
  projectId: 'sorndev',
  storageBucket: 'sorndev.appspot.com',
  messagingSenderId: '857410261779'
}
Vue.prototype.$firebase = Firebase.initializeApp(config)
Vue.prototype.$db = Vue.prototype.$firebase.database()
Vue.prototype.$storageRef = Vue.prototype.$firebase.storage().ref()
