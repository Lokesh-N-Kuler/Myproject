import { useState } from "react";

import EmergencyHeader from "../components/EmergencyHeader";
import EmergencyStats from "../components/EmergencyStats";
import EmergencyIncidents from "../components/EmergencyIncidents";
import ResponseTeams from "../components/ResponseTeams";
import EmergencyMap from "../components/EmergencyMap";
import AIEmergencyAnalysis from "../components/AIEmergencyAnalysis";
import EmergencyAlerts from "../components/EmergencyAlerts";

import "../styles/emergency.css";

function Emergency() {
  const [showMap, setShowMap] = useState(false);

  return (
    <section id="emergency" className="emergency-page">
      <EmergencyHeader />

      <EmergencyStats />

      <div className="emergency-main-grid">
        <EmergencyIncidents />
        <ResponseTeams />
      </div>

      <div className="emergency-map-button-container">
        <button
          className="view-emergency-map-btn"
          onClick={() => setShowMap(!showMap)}
        >
          {showMap ? "Hide Emergency Map" : "View Emergency Map"}
        </button>
      </div>

      {showMap && <EmergencyMap />}

      <AIEmergencyAnalysis />

      <EmergencyAlerts />
    </section>
  );
}

export default Emergency;