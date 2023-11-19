'use client'
import Card from "@/components/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowTrendDown, faDownLong, faGaugeHigh, faLightbulb, faSmog} from "@fortawesome/free-solid-svg-icons";
import { Bar } from "react-chartjs-2";
import React from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

function togglePopup() {
    let popup = document.getElementById("rewardsPopup");
    if (!popup) return;

    let showing = !popup.classList.contains("hidden");
    if (showing) {
        popup.classList.add("hidden");
    } else {
        popup.classList.remove("hidden");
    }
}

export default function Page() {
    return (
        <>
                <Card style={{ marginTop: "1rem" }}>
            <div className="inline" style={{ padding: "0.5rem 2rem" }}>
                <div>
                    <h1 style={{ fontSize: "2.5rem" }}><FontAwesomeIcon icon={faSmog}/> Electricity in CO2</h1>
                    <h3 style={{ marginTop: "1rem" }}>In Germany, the average usage of a kilowatt hour results in the pollution of 420g of carbon dioxide.</h3>
                    
                    <button className="redeem" onClick={togglePopup} style={{ marginRight: "1rem", marginTop: "1rem" }}>
                        Verbrauch vergleichen
                    </button>
                </div>
            </div>
                </Card>           
           
            <Card style={{ marginTop: "1rem", animationDelay: "0.3s"}}>
            <div className="inline" style={{ padding: "0.5rem 2rem" }}>
                <div>
                    <h1 style={{ fontSize: "2.5rem" }}><FontAwesomeIcon icon={faLightbulb}/> Lights out!</h1>
                    <h3 style={{ marginTop: "1rem" }}>Most people leave their lights at home on, even if they're not currently in the room. Trying to 
                    turn off useless lights can spare someone 60 watt hours with an old lightbulb and around 7 watt hours with a LED lamp.</h3>
                </div>
            </div>
                </Card>

                <Card style={{ marginTop: "1rem" }}>
            <div className="inline" style={{ padding: "0.5rem 2rem" }}>
                <div>
                    <h1 style={{ fontSize: "2.5rem" }}><FontAwesomeIcon icon={faArrowTrendDown}/> LED superiority</h1>
                    <h3 style={{ marginTop: "1rem" }}>LED lamps have gotten cheaper around the last years and bring a lot of advantages with them.
                    Compared to oldstyle lamps they can shine brighter and waste less energy. As a bonus, their lifespan is longer than that those of
                     old style lamps. A direct upgrade!</h3>
                </div>
            </div>
                </Card>

                <Card style={{ marginTop: "1rem" }}>
            <div className="inline" style={{ padding: "0.5rem 2rem" }}>
                <div>
                    
                    <h1 style={{ fontSize: "2.5rem" }}><FontAwesomeIcon icon={faGaugeHigh}/> Washing smart</h1>
                    <h3 style={{ marginTop: "1rem" }}>Washing machines will use around 0,7 kWh for one session. Trying to reduce the amount of times
                     you use your washing machine by washing more clothes in one session can save around of 300g of carbon dioxide.</h3>
                </div>
            </div>
                </Card>          

                <Card style={{ marginTop: "1rem" }}>
            <div className="inline" style={{ padding: "0.5rem 2rem" }}>
                <div>
                    
                    <h1 style={{ fontSize: "2.5rem" }}><FontAwesomeIcon icon={faGaugeHigh}/> Washing smart</h1>
                    <h3 style={{ marginTop: "1rem" }}>Washing machines will use around 0,7 kWh for one session. Trying to reduce the amount of times
                     you use your washing machine by washing more clothes in one session can save around of 300g of carbon dioxide.</h3>
                </div>
            </div>
                </Card>      

            <div id="rewardsPopup" className="rewardsPopup hidden">
                <div className="rewardsInner">
                    <div style={{ width: "100%", height: "100%", boxSizing: "border-box", padding: "2rem 2rem 6rem 2rem", position: "relative" }}>
                    <div>
                          <Bar
                            data={{
                              labels: ["1 year of lights", "washing machine", "charging smartphone", "Driving from Munich to Berlin", "Flight from Munich to London"],
                              datasets: [
                                {
                                  data: [15, 12, 6, 7, 4],
                                  backgroundColor: ["red", "yellow", "blue", "black", "green"],
                                  borderColor: "orange",
                                  borderWidth: 5
                                },
                              ]
                            }}
                            
                          />
                        </div>
                        <button className="buttonClose" onClick={togglePopup}>Close</button>
                    </div>
                </div>
            </div>

        </>
    );
}