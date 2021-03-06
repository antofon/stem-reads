import firebase from "firebase";
import Rebase from "re-base";

// import app from "firebase/app";
// import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

// class Firebase {
//   constructor() {
//     app.initializeApp(config);

//     this.auth = app.auth();
//   }

//   // *** Auth API, methods ***
//   //endpoints are called asynchronously and will be resolved
//   doCreateUserWithEmailAndPassword = (email, password) =>
//     this.auth.createUserWithEmailAndPassword(email, password);

//   doSignInWithEmailAndPassword = (email, password) =>
//     this.auth.signInWithEmailAndPassword(email, password);

//   // If no user is authenticated in the first place, nothing will happen when calling this function.
//   doSignOut = () => this.auth.signOut();

//   doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

//   doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
// }

const app = firebase.initializeApp(config);

const base = Rebase.createClass(app.database());
// Get a reference to the database service
// var database = firebase.database();
export { base };
export default app;
