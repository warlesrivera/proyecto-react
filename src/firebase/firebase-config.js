

/*
           
    dispatch de accion del componente  auth                       
                                                                                            
    @author Ubarles Rivera Galvis  <warelsrivera123@gmail.com>      
        
    @method firebaseConfig configuracion de firebase        
                                                           
*/ 


import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA8p1h6djFxz4XXpwYMp7XOeYJZFXXYUw4",
  authDomain: "proyecto-prueba-6c9a5.firebaseapp.com",
  databaseURL: "https://proyecto-prueba-6c9a5-default-rtdb.firebaseio.com",
  projectId: "proyecto-prueba-6c9a5",
  storageBucket: "proyecto-prueba-6c9a5.appspot.com",
  messagingSenderId: "987212718839",
  appId: "1:987212718839:web:6534ae2c1e31cb6e39a9f2",
  measurementId: "G-1ZHSD5CW9W"
};
  
firebase.initializeApp(firebaseConfig);

// conexion a firestore
const db = firebase.firestore();
// Provider Auth con google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}

