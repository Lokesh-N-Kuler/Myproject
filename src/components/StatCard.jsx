import "../styles/statcard.css";
import {
  FaCar,
  FaWater,
  FaSmog,
  FaExclamationTriangle,
} from "react-icons/fa";

function StatCard() {
  return (
    <div className="stats-container">

      <div className="stat-card1">
        <div className="icon traffic">
          <FaCar />
        </div>

        <div className="stat-content">
          <h4>Traffic</h4>
          <h2>1,245</h2>
          <p>Vehicles</p>
        </div>
      </div>

      <div className="stat-card1">
        <div className="icon flood">
          <FaWater />
        </div>

        <div className="stat-content">
          <h4>Flood Risk</h4>
          <h2>Medium</h2>
          <p>65%</p>
        </div>
      </div>

      <div className="stat-card2">
        <div className="icon pollution">
          <FaSmog />
        </div>

        <div className="stat-content">
          <h4>AQI</h4>
          <h2>132</h2>
          <p>Moderate</p>
        </div>
      </div>

      <div className="stat-card2">
        <div className="icon alert">
          <FaExclamationTriangle />
        </div>

        <div className="stat-content">
          <h4>Alerts</h4>
          <h2>3</h2>
          <p>Active</p>
        </div>
      </div>

    </div>
  );
}

export default StatCard;