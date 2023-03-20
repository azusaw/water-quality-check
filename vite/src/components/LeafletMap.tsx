import { useEffect } from "react"
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet"
import { Point } from "../types/Point"

type Props = {
  points: Point[]
  filter: any
}

const SetViewOnFilterChange = ({ filter }) => {
  const map = useMap()
  useEffect(() => {
    const { lat, long } = filter
    map.setView([lat, long], map.getZoom())
  }, [filter])
  return null
}

const LeafletMap = ({ points, filter }: Props) => {
  return (
    <MapContainer
      style={{ height: "500px", width: "800px" }}
      center={[filter.lat ?? 0, filter.long ?? 0]}
      zoom={8}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points.map((p) => (
        <Marker
          key={`ma-ker-${p.id}`}
          position={[p.site.latitude, p.site.longitude]}
        >
          <Popup>
            <p>
              <b>Water Info</b>
              <br />
              Score: {p.score}
              <br />
              Ph: {p.ph}
            </p>
            <b>Date Info</b>
            <br />
            Date: {p.datetime}
            <br />
            User: {p.user.name}
          </Popup>
        </Marker>
      ))}
      <SetViewOnFilterChange filter={filter} />
    </MapContainer>
  )
}

export default LeafletMap
