import TrafficHeader from "../components/TrafficHeader";
import TrafficStats from "../components/TrafficStats";
import "../styles/traffic.css";
import CongestionChart from "../components/CongestionChart";
import SignalStatus from "../components/SignalStatus";
import TrafficMap from "../components/TrafficMap";
function Traffic() {
  return (
    <section id="traffic" className="traffic-page">

      <TrafficHeader />

      <TrafficStats />

      <TrafficMap />

      <div className="traffic-grid">

    <CongestionChart />

    <SignalStatus />

</div>

      {/* Next we'll add:
          - Traffic Map
          - Congestion Chart
          - Signal Status
          - Road Closures
          - AI Route Recommendation
          - Traffic Incidents
      */}

    </section>
  );
}

export default Traffic;