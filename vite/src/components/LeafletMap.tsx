import { useEffect } from "react"
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import { Point } from "../types/Point"
import { Avatar, Grid, Stack } from "@mui/material"

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

const safeMaker = new L.Icon({
  iconUrl: "/pin_blue.svg",
  iconSize: new L.Point(40, 60),
})

const dangerMaker = new L.Icon({
  iconUrl: "/pin_red.svg",
  iconSize: new L.Point(40, 60),
})

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
          icon={p.score < 5.0 ? dangerMaker : safeMaker}
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
            <Stack
              direction={"row"}
              spacing={1}
              alignItems="center"
              sx={{ maxWidth: 200, marginTop: 1 }}
            >
              <Avatar
                alt={p.user.name}
                src={p.user.photoUrl}
                style={{ marginRight: 10 }}
              />
              {p.user.name}
            </Stack>
          </Popup>
        </Marker>
      ))}
      <SetViewOnFilterChange filter={filter} />
    </MapContainer>
  )
}

export default LeafletMap
