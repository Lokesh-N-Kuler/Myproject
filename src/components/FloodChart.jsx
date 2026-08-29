import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

function FloodChart() {
  const data = [
    { time: "6 AM", rainfall: 12, waterLevel: 2.1 },
    { time: "9 AM", rainfall: 18, waterLevel: 2.4 },
    { time: "12 PM", rainfall: 32, waterLevel: 2.9 },
    { time: "3 PM", rainfall: 42, waterLevel: 3.8 },
    { time: "6 PM", rainfall: 28, waterLevel: 3.3 },
    { time: "9 PM", rainfall: 15, waterLevel: 2.7 },
  ];

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