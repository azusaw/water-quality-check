// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {
  GeoPoint,
  Timestamp,
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore/lite"

import { Point } from "../types/Point"
import { User } from "../types/User"

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
const db = getFirestore(app)

// Get a list of points of map from your database
export const getPoints = async () => {
  const pointsCol = collection(db, "points")
  const pointsSnapshot = await getDocs(pointsCol)
  return pointsSnapshot.docs.map((doc) => doc.data() as Point)
}

export const savePoint = async (point: Point) => {
  try {
    const docRef = await addDoc(collection(db, "points"), {
      datetime: Timestamp.now(),
      ph: point.ph,
      score: point.score,
      site: new GeoPoint(point.site.latitude, point.site.longitude),
      user: {
        id: point.user.id,
        name: point.user.name,
      },
    })
    console.log("Document written with ID: ", docRef.id)
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}
