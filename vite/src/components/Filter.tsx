import { useState } from 'react';

const MapFilter = ({ filter, setFilter }) => {
  const [lat, setLat] = useState(filter.lat);
  const [long, setLong] = useState(filter.long);
  const [radius, setRadius] = useState(filter.radius);

  return (
    <div>
      <label>
        Lat:
        <input
          type={'number'}
          placeholder={lat.toString()}
          step={0.1}
          value={lat}
          onChange={(e) => {
            setLat(Number(e.target.value));
          }}
        ></input>
      </label>
      <label>
        Long:
        <input
          type={'number'}
          placeholder={long.toString()}
          value={long}
          step={0.1}
          onChange={(e) => {
            setLong(Number(e.target.value));
          }}
        ></input>
      </label>
      <label>
        radius
        <input
          type={'range'}
          min={0}
          max={100}
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
        ></input>
        {radius} km
      </label>
      <button
        onClick={() =>
          setFilter({
            lat,
            long,
            radius,
          })
        }
      >
        Confirm
      </button>
    </div>
  );
};

export default MapFilter;
