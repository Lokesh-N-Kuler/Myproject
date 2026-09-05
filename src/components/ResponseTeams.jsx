import { useEffect, useState } from "react";
import { getEmergencyData } from "../services/EmergencyService";

function ResponseTeams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function loadTeams() {
      try {
        const data = await getEmergencyData();
        setTeams(data.responseTeams);
      } catch (error) {
        console.log(error);
      }
    }

    loadTeams();
  }, []);

  return (
    <div className="response-teams-card">
      <div className="emergency-card-header">
        <div>
          <h2>Response Teams</h2>
          <p>Current deployment status</p>
        </div>
      </div>

      <div className="teams-list">
        {teams.map((team, index) => (
          <div className="team-row" key={index}>
            <div className="team-icon">
              🚑
            </div>

            <div className="team-info">
              <h4>{team.name}</h4>
              <p>{team.available}</p>
            </div>

            <span className={`team-status ${team.status}`}>
              {team.status === "active" ? "Active" : "Standby"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResponseTeams;