import { useRef, useMemo, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"

function DraggableMarker({ position, setPosition }) {
  const map = useMap()
  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
        }
      },
    }),
    []
  )

  useEffect(() => {
    map.setView(position, map.getZoom())
  }, [position])

  return (
    <Marker
      draggable
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span>
          {position[0]}N, {position[1]}W
        </span>
      </Popup>
    </Marker>
  )
}

const PointEntryFormMap = ({ position, setPosition }) => {
  return (
    <MapContainer
      style={{ height: "200px", width: "100%" }}
      center={position}
      zoom={8}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <DraggableMarker position={position} setPosition={setPosition} />
    </MapContainer>
  )
}

export default PointEntryFormMap
