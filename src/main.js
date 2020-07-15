import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBfmhR6DnJLyvVDFi5GDe7S3kig3fOEYNQ",
    authDomain: "vue-calendar-654ed.firebaseapp.com",
    databaseURL: "https://vue-calendar-654ed.firebaseio.com",
    projectId: "vue-calendar-654ed",
    storageBucket: "vue-calendar-654ed.appspot.com",
    messagingSenderId: "77548544724",
    appId: "1:77548544724:web:c2e623d7555cf93ba39141"
})

export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
