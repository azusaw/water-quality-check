import { useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvent,
} from 'react-leaflet';

const SetViewOnFilterChange = ({ filter }) => {
  const map = useMap();
  useEffect(() => {
    const { lat, long } = filter;
    map.setView([lat, long], map.getZoom());
  }, [filter]);
  return null;
};

const LeafletMap = ({ records, filter }) => {
  return (
    <MapContainer
      style={{ height: '200px', width: '500px' }}
      center={[filter.lat ?? 0, filter.long ?? 0]}
      zoom={8}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {records.map((r) => (
        <Marker key={r._id} position={[r.site.latitude, r.site.longitude]}>
          <Popup>
            <p>
              Drinkability score of <strong>{r.data.score}</strong>
              <br />
              <a>Read more...</a>
            </p>
            <em>Submitted: {r.site.dateSubmitted}</em>
          </Popup>
        </Marker>
      ))}
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <SetViewOnFilterChange filter={filter} />
    </MapContainer>
  );
};

export default LeafletMap;
