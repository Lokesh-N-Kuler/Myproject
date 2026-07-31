import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const data = [
  { area: "MG Road", traffic: 90 },
  { area: "Indiranagar", traffic: 65 },
  { area: "Whitefield", traffic: 75 },
  { area: "Airport", traffic: 45 },
  { area: "Electronic", traffic: 82 },
];

function CongestionChart() {
  return (
    <div className="chart-card">

      <h2>📈 Congestion by Area</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="area" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="traffic" fill="#2563EB" radius={[5,5,0,0]} />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

export default CongestionChart;