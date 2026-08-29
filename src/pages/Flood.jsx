import { useState } from "react";

import FloodHeader from "../components/FloodHeader";
import FloodStats from "../components/FloodStats";
import FloodMap from "../components/FloodMap";

import "../styles/flood.css";

function Flood() {
  const [showMap, setShowMap] = useState(false);

  return (
    <section id="flood" className="flood-page">

      <FloodHeader />

      <FloodStats />

      {/* Map Button */}
      <div className="flood-map-button-container">

        <button
          className="view-flood-map-btn"
          onClick={() => setShowMap(!showMap)}
        >
          {showMap ? "Hide Flood Risk Map" : "View Flood Risk Map"}
        </button>

      </div>

      {/* Show map only when button is clicked */}
      {showMap && <FloodMap />}

    </section>
  );
}

export default Flood;