'use client'
import Card from "@/components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendDown, faDownLong, faGaugeHigh, faLightbulb, faSmog } from "@fortawesome/free-solid-svg-icons";
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
                        <h1 className="textBig" style={{ marginBottom: "0.75rem" }}><FontAwesomeIcon icon={faSmog} /> Electricity in CO2</h1>
                        <h3 className="textSmall">In Germany, the average usage of a kilowatt hour results in the pollution of 420g of carbon dioxide.</h3>

                        <button className="redeem" onClick={togglePopup} style={{ marginRight: "1rem", marginTop: "1rem" }}>
                            Compare Emission
                        </button>
                    </div>
                </div>
            </Card>

            <Card style={{ marginTop: "1rem", animationDelay: "0.3s" }}>
                <div className="inline" style={{ padding: "0.5rem 2rem" }}>
                    <div>
                        <h1 className="textBig" style={{ marginBottom: "0.75rem" }}><FontAwesomeIcon icon={faLightbulb} /> Lights out!</h1>
                        <h3 className="textSmall">Most people leave their lights at home on, even if they&apos;re not currently in the room. Trying to
                            turn off useless lights can spare someone 60 watt hours with an old lightbulb and around 7 watt hours with a LED lamp.</h3>
                    </div>
                </div>
            </Card>

            <Card style={{ marginTop: "1rem", animationDelay: "0.6s" }}>
                <div className="inline" style={{ padding: "0.5rem 2rem" }}>
                    <div>
                        <h1 className="textBig" style={{ marginBottom: "0.75rem" }}><FontAwesomeIcon icon={faArrowTrendDown} /> LED superiority</h1>
                        <h3 className="textSmall">LED lamps have gotten cheaper around the last years and bring a lot of advantages with them.
                            Compared to oldstyle lamps they can shine brighter and waste less energy. As a bonus, their lifespan is longer than that those of
                            old style lamps. A direct upgrade!</h3>
                    </div>
                </div>
            </Card>

            <Card style={{ marginTop: "1rem", animationDelay: "0.9s" }}>
                <div className="inline" style={{ padding: "0.5rem 2rem" }}>
                    <div>

                        <h1 className="textBig" style={{ marginBottom: "0.75rem" }}><FontAwesomeIcon icon={faGaugeHigh} /> Washing smart</h1>
                        <h3 className="textSmall">Washing machines will use around 0,7 kWh for one session. Trying to reduce the amount of times
                            you use your washing machine by washing more clothes in one session can save around of 300g of carbon dioxide.</h3>
                    </div>
                </div>
            </Card>

            <div id="rewardsPopup" className="rewardsPopup hidden">
                <div className="rewardsInner">
                    <div style={{ width: "100%", height: "100%", boxSizing: "border-box", padding: "2rem 2rem 6rem 2rem", position: "relative" }}>
                        <div style={{ height: "calc(5rem + 15vw)" }}>
                            <Bar
                                data={{
                                    labels: ["Stock"],
                                    datasets: [{
                                        label: "Daily charging of a smartphone for a year",
                                        backgroundColor: "#A1EDED",
                                        data: [1533],
                                    }, {
                                        label: "A single lights usage after a year",
                                        backgroundColor: "#BBEC9C",
                                        data: [37800],
                                    }, {
                                        label: "Regular washing machine usage after a year",
                                        backgroundColor: "#82bfba",
                                        data: [63000],
                                    }, {
                                        label: "Driving from Munich to Berlin",
                                        backgroundColor: "#037244",
                                        data: [200000],
                                    }, {
                                        label: "Flight from Munich to London",
                                        backgroundColor: "#7785ac",
                                        data: [202000],
                                    }]

                                }}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,

                                    plugins: {
                                        legend: {
                                            display: true,
                                        },
                                    },
                                    scales: {
                                        y: {
                                            //beginAtZero: true,
                                            title: {
                                                display: true,
                                                text: "CO2 in g", // Set the y-axis label to kWh
                                                color: "black", // You can customize the color
                                            },
                                        },
                                        x: {
                                            ticks: {
                                                display: false,
                                            }
                                        }
                                    }
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