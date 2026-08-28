function RoadClosures() {
  const closures = [
    {
      road: "MG Road",
      reason: "Road maintenance",
      status: "Closed",
    },
    {
      road: "Old Airport Road",
      reason: "Accident clearance",
      status: "Partial",
    },
    {
      road: "Whitefield Main Road",
      reason: "Metro construction",
      status: "Restricted",
    },
  ];

  return (
    <div className="road-card">
      <div className="card-title">
        <div>
          <h2>Road Closures</h2>
          <p>Current road restrictions</p>
        </div>
      </div>

      <div className="closure-list">
        {closures.map((item, index) => (
          <div className="closure-row" key={index}>
            <div>
              <h4>{item.road}</h4>
              <p>{item.reason}</p>
            </div>

            <span className={`road-status ${item.status.toLowerCase()}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoadClosures;
