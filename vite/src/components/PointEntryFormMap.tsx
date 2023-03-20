import { useState, useRef, useMemo } from "react"
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet"
import { Point } from "../types/Point"

const center = {
  lat: 51.505,
  lng: -0.09,
}

function DraggableMarker({ position, setPosition }) {
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

