import { useState } from 'react';
// import reactLogo from './assets/react.svg';
import './App.css';
import data from './mockdata.json';

import { useEffect } from 'react';
import axios from 'axios';
import LeafletMap from './components/LeafletMap';
import MapFilter from './components/Filter';

const defaultLocation = [56.9, -3.5];

function App() {
  const [filter, setFilter] = useState({
    lat: 56.8,
    long: -3.5,
    radius: 100,
  });
  const [records, setRecords] = useState([]);
  useEffect(() => {
    setRecords(data.records);

    // axios.get('http://localhost:3000/records').then((res) => {
    //   if (res.statusText === 'OK') {
    //     setRecords(res.data);
    //   }
    // });
  }, []);

  return (
    <div className="App">
      <MapFilter filter={filter} setFilter={setFilter} />
      <LeafletMap records={records} filter={filter} />
    </div>
  );
}

export default App;
