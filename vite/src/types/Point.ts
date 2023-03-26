import { User } from "./User"
import { Timestamp } from "firebase/firestore/lite"
import { z } from "zod"

export interface Point {
  id: string
  datetime: Timestamp
  tds?: number
  ph?: number
  // Contaminants are TRUE if tested positive, FALSE if negative
  // and undefined if inconclusive or not measured
  contaminants?: {
    arsenic?: boolean
    lead?: boolean
    mercury?: boolean
  }
  score: number
  site: {
    latitude: number
    longitude: number
  }
  user: User
}

export type NewPoint = Omit<Point, "id">

export const formPointSchema = z.object({
  ph: z.number().min(0).max(14).optional(),
  score: z.number().min(0).max(10).optional(),
  description: z.string().min(1).max(500),
  site: z.object({
    latitude: z.number().min(-90).max(90),
    longitude: z.number().min(-90).max(90),
  }),
})
export type FormPointSchema = z.infer<typeof formPointSchema>

// type User = y.InferType<typeof newPointSchema>
