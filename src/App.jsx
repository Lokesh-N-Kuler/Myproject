import DashBoard from './pages/DashBoard.jsx'
import WeatherCard from "./components/WeatherCard.jsx";
import StatCard from './components/StatCard.jsx'
import CityMap from "./components/CityMap.jsx";
import TrafficChart from "./components/TrafficChart.jsx";
import AQIchart from "./components/AQIchart.jsx";
import AIRecommendation from "./components/AIRecommendation.jsx";
import "../src/App.css"
import RecentAlerts from "./components/RecentAlerts";


function App() {

  return(
    <>
        <div className="mapnav">
               <DashBoard/>

              <div className="map-card">
                  <h2>City Overview</h2>
                  <CityMap />
              </div>
              
        </div>
        <div className="graph">
        <div className="charts-row">
         <TrafficChart />
         <AQIchart/>
        </div>
        </div>

        <div className="Aicard">
        <AIRecommendation />
        </div>
        
        <div className="navstat">
        <WeatherCard/>
        <StatCard/>
        
        </div>
        <navbar/>
        <RecentAlerts />

    </>
  ) ; 

}

export default App
