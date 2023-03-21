import { useEffect, useState } from "react"
import LeafletMap from "../LeafletMap"
import MapFilter from "../Filter"
import { getPoints } from "../../libs/firebase"
import { Point } from "../../types/Point"

export default function Map() {
  const [filter, setFilter] = useState({
    lat: 56.8,
    long: -3.5,
    zoom: 8,
  })
  const [points, setPoints] = useState<Point[]>([])

  useEffect(() => {
    getPoints().then((list) => setPoints(list))
  }, [])

  return (
    <div>
      <MapFilter filter={filter} setFilter={setFilter} />
      <LeafletMap points={points} filter={filter} />
    </div>
  )
}
