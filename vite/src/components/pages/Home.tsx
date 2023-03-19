import { useEffect, useState } from "react"
import data from "../../mockdata.json"
import LeafletMap from "../LeafletMap"
import MapFilter from "../Filter"
import { getPoints } from "../../libs/firebase"

export default function Home() {
  const [filter, setFilter] = useState({
    lat: 56.8,
    long: -3.5,
    radius: 100,
  })
  const [records, setRecords] = useState([])
  useEffect(() => {
    setRecords(data.records)
    getPoints().then((list) => console.log(list))
  }, [])

  return (
    <div>
      <MapFilter filter={filter} setFilter={setFilter} />
      <LeafletMap records={records} filter={filter} />
    </div>
  )
}
