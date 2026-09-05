function ResponseTeams() {
  const teams = [
    {
      name: "Fire & Rescue Team",
      available: "6 teams active",
      status: "active",
    },
    {
      name: "Medical Response",
      available: "8 teams active",
      status: "active",
    },
    {
      name: "Police Units",
      available: "10 units active",
      status: "active",
    },
    {
      name: "Disaster Response",
      available: "4 teams standby",
      status: "standby",
    },
  ];

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