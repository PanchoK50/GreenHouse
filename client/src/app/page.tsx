import EnergyChart from './EnergyChart'
import Card from "@/components/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownLong} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className='container'>
        <EnergyChart />

        <Card style={{ marginTop: "1rem" }}>
            <div className="inline" style={{ padding: "0.5rem 2rem" }}>
                <div>
                    <h1 style={{ fontSize: "2.5rem" }}>43 kWh</h1>
                    <h3 style={{ marginTop: ".5rem" }}>30% weniger als letzte Woche</h3>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <FontAwesomeIcon icon={faDownLong} style={{ fontSize: "3rem", color: "green" }} />
                </div>
            </div>
        </Card>

        <Card style={{ marginTop: "2rem", padding: "0.5rem 2rem" }}>
            <h1>Tip of the day:</h1>
            <div className="inline" style={{ alignItems: "stretch", marginTop: "1rem" }}>
                <img src="/tree.svg" alt="Tree" style={{ width: "6rem" }} />
                <div style={{height: "100%"}} >
                    <h2>Hello World!</h2>
                </div>
            </div>
        </Card>
        </div>
    </>
  );
}
