import { useEffect } from "react"
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import { Alert, Avatar, Stack, Tooltip } from "@mui/material"
import { Container } from "@mui/system"
import InfoIcon from "@mui/icons-material/Info"
import useGetPoints from "../../../hooks/useGetPoints"

type Props = {
  filter: { lat: number; long: number; zoom: number }
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
            fontFamily: ["Montserrat", "sans-serif"].join(","),
            fontSize: 15,
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
                  <div
                    style={{
                      fontSize: "0.75rem",
                      opacity: "75%",
                      marginTop: "1rem",
                    }}
                  >
                    {p.site.latitude.toFixed(2)}°N&nbsp;
                    {p.site.longitude.toFixed(2)}°W
                  </div>
                  <Stack direction="column" sx={{ marginTop: "0.8rem" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      Drinkability score:&nbsp;&nbsp;
                      <b
                        style={{
                          color: p.score < 5.0 ? "indianred" : "royalblue",
                        }}
                      >
                        {p.score.toFixed(1)}
                      </b>
                      <Tooltip
                        title="This score is calculated based on the available data and ranges from 0 to 10. A score below 5 is considered not suitable for drinking water, whereas a score above 5 is."
                        placement="top"
                      >
                        <InfoIcon className="info-icon" />
                      </Tooltip>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      pH:&nbsp;&nbsp;<b>{p.ph}</b>
                      <Tooltip
                        title="A pH that strongly deviates from 7 indicates there may be problems with the water"
                        placement="top"
                      >
                        <InfoIcon className="info-icon" />
                      </Tooltip>
                    </div>
                  </Stack>
                  <Stack
                    direction={"row"}
                    spacing={1}
                    alignItems="center"
                    sx={{
                      marginTop: "1rem",
                      fontSize: 14,
                    }}
                  >
                    <Avatar
                      alt={p.user.name}
                      src={p.user.photoUrl}
                      style={{ marginRight: 10 }}
                    />
                    {p.user.name}
                  </Stack>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      opacity: "75%",
                      textAlign: "right",
                    }}
                  >
                    {p.datetime.toDate().toLocaleString()}
                  </div>
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
