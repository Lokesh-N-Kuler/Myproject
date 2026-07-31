function SignalStatus() {

    const signals = [

        { name: "MG Road", color: "green", time: "45 sec" },

        { name: "Silk Board", color: "red", time: "90 sec" },

        { name: "Airport Road", color: "yellow", time: "12 sec" },

        { name: "Whitefield", color: "green", time: "30 sec" },

    ];

    return (

        <div className="signal-card">

            <h2>🚦 Traffic Signals</h2>

            {

                signals.map((signal,index)=>(

                    <div className="signal-row" key={index}>

                        <div>

                            <h4>{signal.name}</h4>

                            <p>{signal.time}</p>

                        </div>

                        <span className={`signal-light ${signal.color}`}></span>

                    </div>

                ))

            }

        </div>

    );

}

export default SignalStatus;