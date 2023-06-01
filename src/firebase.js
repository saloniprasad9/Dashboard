import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";
 


const firebaseConfig = {
  apiKey: "AIzaSyA1kZTipD4ZMv4MeN4l_EK89ZNnkoNEIXg",
  authDomain: "dashboard-2ecff.firebaseapp.com",
  projectId: "dashboard-2ecff",
  storageBucket: "dashboard-2ecff.appspot.com",
  messagingSenderId: "86151664503",
  appId: "1:86151664503:web:f3a381881c6081262a0772"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};
  


export const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};


export const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

export const logout = () => {
    signOut(auth);
};

// export default {
//     auth,
//     db,
//     signInWithGoogle,
//     logInWithEmailAndPassword,
//     registerWithEmailAndPassword,
//     sendPasswordReset,
//     logout,
// };