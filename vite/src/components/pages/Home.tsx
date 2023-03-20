import { useEffect, useState } from "react"
import LeafletMap from "../LeafletMap"
import MapFilter from "../Filter"
import { getPoints } from "../../libs/firebase"
import { Point } from "../../types/Point"

export default function Home() {
  const [filter, setFilter] = useState({
    lat: 56.8,
    long: -3.5,
    radius: 100,
  })
  const [points, setPoints] = useState<Point[]>([])

  useEffect(() => {
    getPoints().then((list) => setPoints(list))
  }, [])

  useEffect(() => {
    console.log(points)
  }, [points])

  return (
    <div>
      <MapFilter filter={filter} setFilter={setFilter} />
      <LeafletMap points={points} filter={filter} />
    </div>
  )
}
