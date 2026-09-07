import { useEffect, useState } from "react";
import "../styles/trafficIncidents.css";

function TrafficIncidents() {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const TOMTOM_API_KEY = import.meta.env.VITE_TOMTOM_API_KEY;

  const fetchIncidents = async () => {
    try {
      setLoading(true);
      setError("");

      // Bangalore bounding box
      const bbox = "77.45,12.80,77.80,13.20";

      const fields = `{incidents{
        type,
        geometry{type,coordinates},
        properties{
          id,
          iconCategory,
          magnitudeOfDelay,
          delay,
          length,
          roadNumbers,
          from,
          to,
          description,
          startTime,
          endTime
        }
      }}`;

      const url =
        `https://api.tomtom.com/traffic/services/5/incidentDetails` +
        `?bbox=${bbox}` +
        `&fields=${encodeURIComponent(fields)}` +
        `&language=en-GB` +
        `&timeValidityFilter=present` +
        `&key=${TOMTOM_API_KEY}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`TomTom API error: ${response.status}`);
      }

      const data = await response.json();

      setIncidents(data.incidents || []);
    } catch (err) {
      console.error("Traffic incidents:", err);
      setError("Unable to load live traffic incidents.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIncidents();

    // Refresh every 2 minutes
    const interval = setInterval(fetchIncidents, 120000);

    return () => clearInterval(interval);
  }, []);

  const getIncidentType = (category) => {
    const types = {
      0: "Unknown",
      1: "Accident",
      2: "Fog",
      3: "Dangerous Conditions",
      4: "Rain",
      5: "Ice",
      6: "Jam",
      7: "Lane Closed",
      8: "Road Closed",
      9: "Road Works",
      10: "Wind",
      11: "Flooding",
      14: "Broken Down Vehicle",
    };

    return types[category] || "Traffic Incident";
  };

  const formatDelay = (seconds) => {
    if (!seconds || seconds <= 0) return "No additional delay";

    const minutes = Math.round(seconds / 60);

    if (minutes < 60) {
      return `${minutes} min delay`;
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours}h ${remainingMinutes}m delay`;
  };

  return (
    <section className="traffic-incidents">

      <div className="incidents-header">
        <div>
          <h2>Traffic Incidents</h2>
          <p>Live incidents detected in Bangalore</p>
        </div>

        <button
          className="refresh-incidents"
          onClick={fetchIncidents}
        >
          Refresh
        </button>
      </div>

      {loading && (
        <div className="incident-status">
          Loading live traffic incidents...
        </div>
      )}

      {error && (
        <div className="incident-error">
          {error}
        </div>
      )}

      {!loading && !error && incidents.length === 0 && (
        <div className="incident-status">
          No active traffic incidents detected.
        </div>
      )}

      {!loading && !error && incidents.length > 0 && (
        <div className="incident-list">

          {incidents.slice(0, 10).map((incident, index) => {
            const properties = incident.properties || {};

            const type = getIncidentType(
              properties.iconCategory
            );

            return (
              <div
                className="incident-card"
                key={properties.id || index}
              >

                <div className="incident-icon">
                  {type === "Accident"
                    ? "ACC"
                    : type === "Road Works"
                    ? "WORK"
                    : type === "Road Closed"
                    ? "CLOSED"
                    : "INFO"}
                </div>

                <div className="incident-content">

                  <div className="incident-title-row">
                    <h3>{type}</h3>

                    <span className="live-badge">
                      LIVE
                    </span>
                  </div>

                  <p className="incident-description">
                    {properties.description ||
                      "Traffic incident reported on this road."}
                  </p>

                  {properties.roadNumbers &&
                    properties.roadNumbers.length > 0 && (
                      <p className="incident-road">
                        Road:{" "}
                        {properties.roadNumbers.join(", ")}
                      </p>
                  )}

                  <div className="incident-details">

                    <span>
                      {formatDelay(properties.delay)}
                    </span>

                    {properties.length && (
                      <span>
                        {(properties.length / 1000).toFixed(1)} km affected
                      </span>
                    )}

                  </div>

                </div>
              </div>
            );
          })}

        </div>
      )}

      {!loading && incidents.length > 10 && (
        <p className="incident-footer">
          Showing 10 of {incidents.length} active incidents
        </p>
      )}

    </section>
  );
}

export default TrafficIncidents;