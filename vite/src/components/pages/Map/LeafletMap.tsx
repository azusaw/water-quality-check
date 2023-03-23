import { useEffect } from "react"
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet"
import L from "leaflet"
// import { Point } from "../../../types/Point"
import { Alert, Avatar, Grid, Stack, Tooltip, Typography } from "@mui/material"
import useGetPoints from "../../../hooks/useGetPoints"
import { Opacity } from "@mui/icons-material"
import { Container } from "@mui/system"

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

const InfoModal = ({ title }) => {}

const LeafletMap = ({ filter }: Props) => {
  const { data: points, isError, isLoading } = useGetPoints()
  return (
    <>
      {isError && (
        <Alert color="error">Failed to load data, please try again</Alert>
      )}
      <Container
        sx={{ position: "relative", opacity: isLoading ? "80%" : "inherit" }}
      >
        <MapContainer
          style={{
            height: "500px",
            width: "100%",
            borderRadius: 10,
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
                  <Stack spacing={0.5} direction="column">
                    <b>Water Info</b>

                    <Tooltip title="This score is calculated based on the available data and ranges from 0 to 10. A score below 5 is considered not suitable for drinking water, whereas a score above 5 is.">
                      <span>
                        Drinkability score:{" "}
                        <b
                          style={{
                            color: p.score < 5.0 ? "indianred" : "royalblue",
                          }}
                        >
                          {p.score.toFixed(1)}
                        </b>
                        <b> i</b>
                      </span>
                    </Tooltip>
                    <Tooltip title="A pH that strongly deviates from 7 indicates there may be problems with the water">
                      <span>
                        pH: {p.ph} <b>i</b>
                      </span>
                    </Tooltip>
                    <Typography
                      variant="body2"
                      fontSize="0.75rem"
                      sx={{ opacity: "75%" }}
                    >
                      {p.site.latitude.toFixed(2)}°N,{" "}
                      {p.site.longitude.toFixed(2)}°W
                      <br />
                      {p.datetime.toDate().toLocaleString()}
                    </Typography>
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
        {isLoading && (
          <div
            style={{
              zIndex: "9999",
              content: "",
              boxSizing: "border-box",
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "40px",
              height: "40px",
              marginTop: "-20px",
              marginLeft: "-20px",
              borderRadius: "50%",
              border: "5px solid rgba(180, 180, 180, 0.6)",
              borderTopColor: "rgba(0, 0, 0, 0.6)",
              animation: "spinner 0.6s linear infinite",
            }}
          ></div>
        )}
      </Container>
    </>
  )
}

export default LeafletMap

