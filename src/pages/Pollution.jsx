import PollutionHeader from "../components/PollutionHeader";
import PollutionStats from "../components/PollutionStats";
import "../styles/pollution.css";

function Pollution() {
  return (
    <section id="pollution" className="pollution-page">
      <PollutionHeader />
      <PollutionStats />
    </section>
  );
}

export default Pollution;