import { useEffect, useState } from "react"
import LeafletMap from "./LeafletMap"
import MapFilter from "./Filter"
import { getPoints } from "../../../libs/firebase"
import { Point } from "../../../types/Point"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function Map() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState({
    lat: 56.8,
    long: -3.5,
    zoom: 8,
  })

  return (
    <div>
      <MapFilter filter={filter} setFilter={setFilter} />
      <LeafletMap filter={filter} />
      <Button onClick={() => navigate(-1)}>Go back</Button>
    </div>
  )
}

