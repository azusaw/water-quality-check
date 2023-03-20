import { useEffect, useState } from "react"
import { Slider, Stack } from "@mui/material"

const MapFilter = ({ filter, setFilter }) => {
  const [lat, setLat] = useState<number>(filter.lat)
  const [long, setLong] = useState<number>(filter.long)
  const [zoom, setZoom] = useState<number>(filter.zoom)

  useEffect(() => {
    setFilter({
      lat,
      long,
      zoom,
    })
  }, [lat, long, zoom])

  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <label>Latitude:</label>
      <input
        type={"number"}
        placeholder={lat.toString()}
        step={0.1}
        value={lat}
        onChange={(e) => {
          setLat(Number(e.target.value))
        }}
      ></input>
      <label>Longitude:</label>
      <input
        type={"number"}
        placeholder={long.toString()}
        value={long}
        step={0.1}
        onChange={(e) => {
          setLong(Number(e.target.value))
        }}
      ></input>
      <label>Zoom:</label>
      <Slider
        value={zoom}
        valueLabelDisplay="auto"
        min={2}
        max={15}
        step={0.5}
        onChange={(e) => setZoom(Number((e.target as HTMLInputElement).value))}
      />
    </Stack>
  )
}

export default MapFilter
