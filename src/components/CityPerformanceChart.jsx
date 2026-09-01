import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

function CityPerformanceChart() {
  const data = [
    {
      day: "Mon",
      traffic: 72,
      pollution: 65,
      emergency: 82,
    },
    {
      day: "Tue",
      traffic: 68,
      pollution: 72,
      emergency: 85,
    },
    {
      day: "Wed",
      traffic: 75,
      pollution: 68,
      emergency: 78,
    },
    {
      day: "Thu",
      traffic: 82,
      pollution: 75,
      emergency: 88,
    },
    {
      day: "Fri",
      traffic: 78,
      pollution: 82,
      emergency: 84,
    },
    {
      day: "Sat",
      traffic: 85,
      pollution: 70,
      emergency: 90,
    },
    {
      day: "Sun",
      traffic: 88,
      pollution: 62,
      emergency: 92,
    },
  ];

  return (
    <div className="city-performance-card">

      <div className="analytics-card-header">
        <div>
          <h2>City Performance Trend</h2>

          <p>
            Performance comparison across major city systems
          </p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="traffic"
            stroke="#2563eb"
            strokeWidth={3}
            name="Traffic"
          />

          <Line
            type="monotone"
            dataKey="pollution"
            stroke="#f59e0b"
            strokeWidth={3}
            name="Pollution"
          />

          <Line
            type="monotone"
            dataKey="emergency"
            stroke="#dc2626"
            strokeWidth={3}
            name="Emergency"
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default CityPerformanceChart;