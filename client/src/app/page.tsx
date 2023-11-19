import EnergyChart from './EnergyChart'
import Card from "@/components/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownLong} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
        <EnergyChart />

        <Card style={{ marginTop: "1rem", padding: "0.75rem 1rem" }}>
            <div className="inline">
                <div>
                    <h1 className="textBig">43 kWh</h1>
                    <h3 className="altText textMedium" style={{ marginTop: ".5rem" }}>30% less than last week</h3>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "0 .5rem" }}>
                    <FontAwesomeIcon icon={faDownLong} style={{ fontSize: "3rem", color: "#037244" }} />
                </div>
            </div>
        </Card>

        {/*<Card style={{ marginTop: "2rem", padding: "0.75rem 1rem", animationDelay: ".3s" }}>
            <h1>Tip of the day:</h1>
            <div className="inline" style={{ alignItems: "stretch", marginTop: "1rem" }}>
                <img src="/tree.svg" alt="Tree" style={{ width: "6rem" }} />
                <div style={{height: "100%"}} >
                    <h2>Hello World!</h2>
                </div>
            </div>
        </Card>*/}
    </>
  );
}
