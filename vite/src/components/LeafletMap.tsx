import { useEffect } from "react"
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet"
import { Point } from "../types/Point"
import { Avatar, Grid } from "@mui/material"

type Props = {
  points: Point[]
  filter: any
}

const SetViewOnFilterChange = ({ filter }) => {
  const map = useMap()
  useEffect(() => {
    const { lat, long, zoom } = filter
    map.setView([lat, long], zoom)
  }, [filter])
  return null
}

const LeafletMap = ({ points, filter }: Props) => {
  return (
    <MapContainer
      style={{ height: "500px", width: "85vw", maxWidth: "800px" }}
      center={[filter.lat ?? 0, filter.long ?? 0]}
      zoom={8}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points.map((p, idx) => (
        <Marker
          key={`maker-${idx}`}
          position={[p.site.latitude, p.site.longitude]}
        >
          <Popup>
            <Grid
              container
              spacing={1}
              sx={{ minWidth: 150, margin: "0 auto" }}
            >
              <Grid item xs={12}>
                <b>Water Info</b>
              </Grid>
              <Grid item xs={12}>
                GeoPoint: [{p.site.latitude},{p.site.longitude}]
              </Grid>
              <Grid item xs={12}>
                DrinkabilityScore: {p.score}
              </Grid>
              <Grid item xs={12}>
                Ph: {p.ph}
              </Grid>
              <Grid item xs={12}>
                {p.datetime.toDate().toLocaleString()}
              </Grid>
            </Grid>
            <Grid container spacing={1} sx={{ padding: 1 }}>
              <Grid item xs={4}>
                <Avatar alt={p.user.name} src={p.user.photoUrl} />
              </Grid>
              <Grid item xs={8} sx={{ padding: 1 }}>
                {p.user.name}
              </Grid>
            </Grid>
          </Popup>
        </Marker>
      ))}
      <SetViewOnFilterChange filter={filter} />
    </MapContainer>
  )
}

export default LeafletMap
