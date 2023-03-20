import { User } from "./User"
import { LatLngTuple } from "leaflet"

export interface Point {
  id: string
  datetime: string
  ph: number
  score: number
  site: {
    latitude: number
    longitude: number
  }
  user: User
}

export type NewPoint = Omit<Point, "id">

