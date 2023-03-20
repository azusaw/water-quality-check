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
    const { lat, long, zoom } = filter
    map.setView([lat, long], zoom)
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
      {points.map((p, idx) => (
        <Marker
          key={`maker-${idx}`}
          position={[p.site.latitude, p.site.longitude]}
        >
          <Popup>
            <b>Water Info</b>
            <br />
            Score: {p.score}
            <br />
            Ph: {p.ph}
            <br />
            <br />
            <b>Data Info</b>
            <br />
            //TODO
            {/*Date: {p.datetime}*/}
            <br />
            User: {p.user.name}
            <br />
            GeoPoint: [{p.site.latitude},{p.site.longitude}]
          </Popup>
        </Marker>
      ))}
      <SetViewOnFilterChange filter={filter} />
    </MapContainer>
  )
}

export default LeafletMap
