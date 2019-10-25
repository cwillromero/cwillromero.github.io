import firebase from 'firebase';

let firebaseConfig = {
  apiKey: "AIzaSyC1qbIesH2aXgbb_uJbsHVxUz_jV58G300",
  authDomain: "plataforma-actores-juticalpa.firebaseapp.com",
  databaseURL: "https://plataforma-actores-juticalpa.firebaseio.com",
  projectId: "plataforma-actores-juticalpa",
  storageBucket: "plataforma-actores-juticalpa.appspot.com",
  messagingSenderId: "518485770856",
  appId: "1:518485770856:web:44dfaa39c76f790ee871dd"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export {
  firestore as firestore,
  firebase as firebase
}