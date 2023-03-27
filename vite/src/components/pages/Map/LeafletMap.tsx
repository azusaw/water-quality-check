import { useEffect } from "react"
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import { Alert, Avatar, Chip, Stack, Tooltip } from "@mui/material"
import { Container } from "@mui/system"
import InfoIcon from "@mui/icons-material/Info"
import useGetPoints from "../../../hooks/useGetPoints"
import MapMarker from "./MapMarker"

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
          {points && points.map((p, idx) => <MapMarker point={p} key={idx} />)}
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
