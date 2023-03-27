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
  contaminants: {
    arsenic?: boolean
    lead?: boolean
    mercury?: boolean
  }
  // -1 BAD | 0 NEUTRAL | 1 GOOD
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
  tds: z.number().min(0).max(5000),
  contaminants: z
    .object({
      arsenic: z.boolean().optional(),
      mercury: z.boolean().optional(),
      lead: z.boolean().optional(),
    })
    .optional(),
  description: z.string().min(1).max(500),
  site: z.object({
    latitude: z.number().min(-90).max(90),
    longitude: z.number().min(-90).max(90),
  }),
})
export type FormPointSchema = z.infer<typeof formPointSchema>

// type User = y.InferType<typeof newPointSchema>
