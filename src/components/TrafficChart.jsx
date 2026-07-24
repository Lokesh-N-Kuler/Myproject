import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { getTraffic } from "../services/trafficService";
import "../styles/chart.css";

function TrafficChart()  {
  const [trafficData, setTrafficData] = useState([]);

  useEffect(() => {
    async function loadTraffic() {
      try {
        const data = await getTraffic();
        setTrafficData(data);
      } catch (err) {
        console.log(err);
      }
    }

    loadTraffic();
  }, []);

  return (
    <div className="chart-card1">
      <h3>Live Traffic Flow</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={trafficData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="time" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="vehicles"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TrafficChart