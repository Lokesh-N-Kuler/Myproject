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

import { getAQI } from "../services/AQIservice";
import "../styles/pollution.css";

function PollutionAQIChart() {
  const [aqiData, setAqiData] = useState([]);

  useEffect(() => {
    async function loadAQI() {
      try {
        const data = await getAQI();
        setAqiData(data);
      } catch (err) {
        console.error("Failed to load AQI data:", err);
      }
    }

    loadAQI();
  }, []);

  return (
    <div className="pollution-aqi-chart-card">
      <div className="pollution-card-header">
        <div>
          <h2>Live AQI Trend</h2>
          <p>Air Quality Index throughout the day</p>
        </div>

        <span className="aqi-live-badge">
          <span></span>
          LIVE
        </span>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={aqiData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="time" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="aqi"
            stroke="#2563eb"
            strokeWidth={3}
            name="AQI"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PollutionAQIChart;