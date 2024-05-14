// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQdKJfnhQ9kT4Ye5pifJDsUG68h5_lrfg",
  authDomain: "srini-studio.firebaseapp.com",
  projectId: "srini-studio",
  storageBucket: "srini-studio.appspot.com",
  messagingSenderId: "394905185628",
  appId: "1:394905185628:web:b27c62217d8251917d6599",
  measurementId: "G-2B2VH15HN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export const SignInWithGoogle = () => {
    return new Promise((resolve, reject) => {
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
          const name = result.user.displayName;
          const email = result.user.email;
          const photoURL = result.user.photoURL;
          localStorage.setItem("name", name);
          localStorage.setItem("email", email);
          localStorage.setItem("photoURL", photoURL);
          resolve(result); 
          return result;
        })
        .catch((error) => {
          console.log(error);
          reject(error); 
        });
    });
 };