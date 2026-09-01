function DepartmentAnalytics() {
  const departments = [
    {
      name: "Traffic Management",
      score: 76,
      status: "Good",
      type: "good",
    },
    {
      name: "Flood Monitoring",
      score: 89,
      status: "Excellent",
      type: "excellent",
    },
    {
      name: "Air Quality",
      score: 68,
      status: "Needs Attention",
      type: "warning",
    },
    {
      name: "Emergency Response",
      score: 82,
      status: "Good",
      type: "good",
    },
  ];

  return (
    <div className="department-card">

      <div className="analytics-card-header">
        <div>
          <h2>Department Performance</h2>

          <p>
            Current performance by department
          </p>
        </div>
      </div>

      <div className="department-list">

        {departments.map((department, index) => (
          <div className="department-row" key={index}>

            <div className="department-info">
              <h4>{department.name}</h4>

              <span
                className={`department-status ${department.type}`}
              >
                {department.status}
              </span>
            </div>

            <div className="department-score">
              <strong>{department.score}%</strong>

              <div className="progress-bar">
                <div
                  className={`progress ${department.type}`}
                  style={{
                    width: `${department.score}%`,
                  }}
                ></div>
              </div>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default DepartmentAnalytics;