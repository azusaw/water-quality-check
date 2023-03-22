import { useQuery } from "react-query"
import { getPoints } from "../libs/firebase"

const useGetPoints = () => {
  return useQuery("get_points", getPoints)
}

export default useGetPoints
