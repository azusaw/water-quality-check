import { useEffect, useState } from "react"
import { Slider, Grid } from "@mui/material"

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
    <Grid container spacing={2} sx={{ width: "85vw", maxWidth: "800px" }}>
      <Grid item xs={12} md={3}>
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
      </Grid>
      <Grid item xs={12} md={3}>
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
      </Grid>
      <Grid item xs={12} md={6}>
        <label>Zoom:</label>
        <Slider
          value={zoom}
          valueLabelDisplay="auto"
          min={2}
          max={15}
          step={0.5}
          onChange={(e) =>
            setZoom(Number((e.target as HTMLInputElement).value))
          }
        />
      </Grid>
    </Grid>
  )
}

export default MapFilter
