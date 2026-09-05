import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import { useEffect, useState } from "react";
import { getFloodData } from "../Services/FloodService";

function FloodChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadFloodData() {
      try {
        const floodData = await getFloodData();
        setData(floodData.chart);
      } catch (error) {
        console.log(error);
      }
    }

    loadFloodData();
  }, []);

  return (
    <div className="flood-chart-card">
      <div className="chart-heading">
        <div>
          <h2>Rainfall & Water Level</h2>
          <p>Last 24 hours</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="rainfall"
            stroke="#2563eb"
            strokeWidth={3}
            name="Rainfall (mm)"
          />

          <Line
            type="monotone"
            dataKey="waterLevel"
            stroke="#ef4444"
            strokeWidth={3}
            name="Water Level (m)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FloodChart;