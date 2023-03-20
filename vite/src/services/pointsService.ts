import { collection, getDocs } from "firebase/firestore/lite"
import { db } from "../libs/firebase"
import { NewPoint, Point } from "../types/Point"

const getPoints = async (): Promise<Point[]> => {
  const pointsCol = collection(db, "points")
  const pointsSnapshot = await getDocs(pointsCol)
  return pointsSnapshot.docs.map((doc) => doc.data() as Point)
}

const createPoint = async (newPoint: NewPoint): Promise<Point> => {
  return undefined
}

const updatePoint = async (updatedFields: Point): Promise<Point> => {
  return undefined
}

const overwritePoint = async (overwrittenFields: Point): Promise<Point> => {
  return undefined
}

const removePoint = async (removedPoint: Point) => {
  return undefined
}

const pointsService = {
  getPoints,
  createPoint,
  updatePoint,
  overwritePoint,
  removePoint,
}

export default pointsService

