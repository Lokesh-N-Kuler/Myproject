import { useEffect, useState } from "react";
import { getTraffic } from "../services/trafficService";

function TrafficStats() {

const [traffic, setTraffic] = useState(null);

useEffect(() => {
async function loadTraffic() {
try {
const data = await getTraffic();


    console.log("TRAFFIC STATS DATA:", data);

    setTraffic(data);
  } catch (err) {
    console.error("Traffic Stats Error:", err);
  }
}

loadTraffic();


}, []);

const stats = [
{
title: "Active Vehicles",
value: traffic
  ? traffic.active_vehicles != null
    ? traffic.active_vehicles.toLocaleString()
    : "N/A"
  : "...",color: "#2563eb",
},
{
title: "Average Speed",
value: traffic ? `${traffic.average_speed} km/h` : "...",
color: "#10b981",
},
{
title: "Congestion",
value: traffic ? traffic.congestion : "...",
color: "#f59e0b",
},
{
  title: "Accidents",
  value: "N/A",
  color: "#ef4444",
},
];

return ( <div className="traffic-stats">


  {stats.map((item, index) => (

    <div className="traffic-card" key={index}>

      <h4>{item.title}</h4>

      <h2 style={{ color: item.color }}>
        {item.value}
      </h2>

    </div>

  ))}

</div>


);
}

export default TrafficStats;
