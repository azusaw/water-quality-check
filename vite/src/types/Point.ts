import { User } from "./User"
import { Timestamp } from "firebase/firestore/lite"

export interface Point {
  id: string
  datetime: Timestamp
  ph: number
  score: number
  site: {
    latitude: number
    longitude: number
  }
  user: User
}

export type NewPoint = Omit<Point, "id">
