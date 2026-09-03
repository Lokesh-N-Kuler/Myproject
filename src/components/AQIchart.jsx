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

import { getAQI } from "../Services/AQIservice";
import "../styles/chart.css";

function AQIchart() {
  const [aqiData, setAqiData] = useState([]);

  useEffect(() => {
    async function loadAQI() {
      try {
        const data = await getAQI();
        setAqiData(data);
      } catch (err) {
        console.log(err);
      }
    }

    loadAQI();
  }, []);

  return (
    <div className="chart-card2">
      <h3>Live AQI Trend</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={aqiData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="time" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="aqi"
            stroke="#16a34a"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AQIchart