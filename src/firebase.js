import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
import { getFirestore, getDocs, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSXOYz28o4g-YyfldaP9wZB1IlCVQsA2s",
    authDomain: "vcinvestment-847e2.firebaseapp.com",
    projectId: "vcinvestment-847e2",
    storageBucket: "vcinvestment-847e2.appspot.com",
    messagingSenderId: "2868329550",
    appId: "1:2868329550:web:2a57434d5a75f9fd95971f",
    measurementId: "G-P8QTD3XCBM"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const registerWithEmailAndPassword = async (name, email, password) => {
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

  const createNewJob = async (Title, Description, Tags, Link) => {
    try {
      await addDoc(collection(db, "Jobs"), {
        Title: Title,
        Description: Description,
        Tags: Tags,
        Link: Link
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const updateJob = async (Id, Title, Description, Tags, Link) => {
    try {
        await db.collection("Jobs").doc(Id).update({Title: Title, Description: Description, Tags: Tags, Link: Link});
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
  }

  const deleteJob = async (Id) => {
    try {
        var jobskill_query = db.collection('Jobs').where('Job_id','==', Id);
        await jobskill_query.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                 doc.ref.delete();
            });
        });
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
    
  }

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = () => {
    signOut(auth);
  };

  // Get a list of cities from your database
async function getJobs() {
    const jobsCol = collection(db, 'Jobs');
    const jobsSnapshot = await getDocs(jobsCol);
    const jobsList = jobsSnapshot.docs.map(doc => doc.data());
    return jobsList;
  }

  export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    getJobs,
    createNewJob,
    updateJob,
    deleteJob
  };