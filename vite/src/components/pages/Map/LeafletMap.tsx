import { useEffect } from "react"
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet"
import L from "leaflet"
// import { Point } from "../../../types/Point"
import { Alert, Avatar, Grid, Stack } from "@mui/material"
import useGetPoints from "../../../hooks/useGetPoints"

type Props = {
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

const LeafletMap = ({ filter }: Props) => {
  const { data: points, isError } = useGetPoints()
  return (
    <>
      {isError && (
        <Alert color="error">Failed to load data, please try again</Alert>
      )}
      <MapContainer
        style={{
          height: "500px",
          width: "85vw",
          maxWidth: "800px",
        }}
        center={[filter.lat ?? 0, filter.long ?? 0]}
        zoom={8}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points &&
          points.map((p, idx) => (
            <Marker
              key={`maker-${idx}`}
              position={[p.site.latitude, p.site.longitude]}
              icon={p.score < 5.0 ? dangerMaker : safeMaker}
            >
              <Popup>
                <Stack spacing={0} direction="column">
                  <b>Water Info</b>
                  <span>
                    Coords: {p.site.latitude.toFixed(2)} °N,{" "}
                    {p.site.longitude.toFixed(2)} °W
                  </span>
                  <span>
                    Drinkability score:{" "}
                    <b
                      style={{
                        color: p.score < 5.0 ? "indianred" : "royalblue",
                      }}
                    >
                      {p.score.toFixed(1)}
                    </b>
                  </span>
                  <span>Ph: {p.ph}</span>
                  <em>Date: {p.datetime.toDate().toLocaleString()}</em>
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
                </Stack>
              </Popup>
            </Marker>
          ))}
        <SetViewOnFilterChange filter={filter} />
      </MapContainer>
    </>
  )
}

export default LeafletMap

