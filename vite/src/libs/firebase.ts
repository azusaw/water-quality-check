import { initializeApp } from "firebase/app"
import {
  GeoPoint,
  Timestamp,
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore/lite"
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth"
import { Point } from "../types/Point"
import Swal from "sweetalert2/dist/sweetalert2.js"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth()

// Redirect login page of google account
export const loginGoogle = (agent, setUser) => {
  // Check auth condition before redirect login page: for iOS
  if (auth.currentUser) {
    setUser({
      id: auth.currentUser.uid,
      name: auth.currentUser.displayName,
      photoUrl: auth.currentUser.photoURL,
    })
    return
  }

  // User data can not be collected with Safari
  if (
    agent.indexOf("safari") != -1 &&
    agent.indexOf("crios") == -1 &&
    agent.indexOf("chrome") == -1
  ) {
    Swal.fire({
      title: "Safari is not supported",
      text: "We are so sorry but data entry from Safari is not supported for now. Try to use another browser. The website is under construction and we will support Safari soon!",
      icon: "error",
      showConfirmButton: false,
    })
    return
  }

  const provider = new GoogleAuthProvider()
  return signInWithRedirect(auth, provider)
}

export const signOutGoogle = () => {
  let v = auth.signOut()
  console.log(v)
}

// Get a list of points of map from firestore database
export const getPoints = async () => {
  const pointsCol = collection(db, "points")
  const pointsSnapshot = await getDocs(pointsCol)
  return pointsSnapshot.docs.map((doc) => doc.data() as Point)
}

const getScore = (point: Omit<Point, "id" | "datetime" | "score">): number => {
  // Bad if TDS > 500 or any contaminants are positive
  if (point.tds > 500 || Object.values(point.contaminants).includes(true))
    return -1
  // TDS neutral, tests inconclusive or not conducted
  if (!point?.tds || point.tds > 100) return 0
  // TDS good, conclusive negative tests
  return 1
}

// Save a point information in firestore database
export const savePoint = async (
  point: Omit<Point, "id" | "datetime" | "score">
) => {
  const docRef = await addDoc(collection(db, "points"), {
    ...point,
    score: getScore(point),
    datetime: Timestamp.now(),
    site: new GeoPoint(point.site.latitude, point.site.longitude),
  })
  console.log("Document written with ID: ", docRef.id)
}
