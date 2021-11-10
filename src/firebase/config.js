import app from "firebase/app"
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyC_rXt1IZL080a6PwcEydqyxlYhFAppvRo",
    authDomain: "proyectonative-b1a2c.firebaseapp.com",
    projectId: "proyectonative-b1a2c",
    storageBucket: "proyectonative-b1a2c.appspot.com",
    messagingSenderId: "122672906018",
    appId: "1:122672906018:web:60d7698be69c95e56a6f7b"
  };

  app.initializeApp(firebaseConfig) 

  export const auth= firebase.auth() //auth funcion que guardo en la constante auth, guardo los datos q voy a necesitar
  export const storage= app.storage() 
  export const db= app.firestore() //guardar y traer cosas