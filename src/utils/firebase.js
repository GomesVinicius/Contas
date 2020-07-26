import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAzQ10WYZ2VIZghT9X0oGb8Ohg518mmQjo",
    authDomain: "agenda-6dba0.firebaseapp.com",
    databaseURL: "https://agenda-6dba0.firebaseio.com",
    projectId: "agenda-6dba0",
    storageBucket: "agenda-6dba0.appspot.com",
    messagingSenderId: "1056328001644",
    appId: "1:1056328001644:web:8b3b5bd93e5a05e5501049"
}

export const firebaseApp = firebase.initializeApp(config)
export const firebaseDatabase = firebaseApp.database().ref('conta')
//export const firebaseDatabase = firebase.database(); -- o do cara
