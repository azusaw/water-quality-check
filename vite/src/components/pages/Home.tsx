import { useEffect, useState } from "react";
import "../../App.css";
import data from "../../mockdata.json";
import axios from "axios";
import LeafletMap from "../LeafletMap";
import MapFilter from "../Filter";

const defaultLocation = [56.9, -3.5];

export default function Home() {
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
    <div>
      <MapFilter filter={filter} setFilter={setFilter} />
      <LeafletMap records={records} filter={filter} />
    </div>
  );
}
