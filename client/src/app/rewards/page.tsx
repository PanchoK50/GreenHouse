import Card from "@/components/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEarth} from "@fortawesome/free-solid-svg-icons";


export default function Page() {
    return (
        <Card style={{ padding: "1rem" }}>
            <h1>20 Minuten <span style={{ color: "#208ac4" }}>MVG</span>-Rad</h1>
            <div className="inline" style={{
                justifyContent: "flex-start", alignItems: "center", marginTop: "1rem"
            }}>
                <button className="redeem" style={{ marginRight: "1rem" }}>
                    Jetzt einlösen
                </button>
                <span style={{ fontSize: "1.5rem" }}>
                    100 <FontAwesomeIcon icon={faEarth} style={{ color: "#007f21" }} />
                </span>
            </div>
        </Card>
    );
}