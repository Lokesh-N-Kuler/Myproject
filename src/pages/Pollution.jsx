import PollutionHeader from "../components/PollutionHeader";
import PollutionStats from "../components/PollutionStats";
import PollutionAQIChart from "../components/PollutionAQIChart";
import PollutantLevels from "../components/PollutantLevels";

import "../styles/pollution.css";

function Pollution() {
  return (
    <section id="pollution" className="pollution-page">
      <PollutionHeader />

      <PollutionStats />

      <div className="pollution-grid">
        <PollutionAQIChart />
        <PollutantLevels />
      </div>
    </section>
  );
}

export default Pollution;