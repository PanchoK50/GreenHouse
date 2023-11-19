import Card from "@/components/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEarth, faPersonBiking, faArchway, faLock, faBuildingColumns} from "@fortawesome/free-solid-svg-icons";


export default function Page() {
    return (
        <>
            <Card style={{ padding: "1rem 2rem" }}>
                <div className="inline left">
                    <FontAwesomeIcon className="dropShadow" icon={faPersonBiking} style={{ fontSize: "3rem", marginRight: "2rem" }} />
                    <div style={{ flexGrow: "1" }}>
                        <h1>MVG-Rad</h1>
                        <p className="altText" style={{ fontSize: "1.5rem" }}>30 free minutes of MVG-Rad</p>
                        <div className="inline" style={{ marginTop: "1.5rem" }}>
                            <span style={{ fontSize: "1.5rem" }}>
                                100 <FontAwesomeIcon icon={faEarth} style={{ color: "#037244" }} />
                            </span>
                            <button className="redeem">
                                Redeem
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
            <Card style={{ padding: "1rem 2rem", marginTop: "1.5rem", animationDelay: ".3s" }}>
                <div className="inline left">
                    <FontAwesomeIcon className="dropShadow" icon={faBuildingColumns} style={{ fontSize: "3rem", marginRight: "2rem" }} />
                    <div style={{ flexGrow: "1" }}>
                        <h1>Museum Ticket</h1>
                        <p className="altText" style={{ fontSize: "1.5rem" }}>One month free entry to any museum in Munich</p>
                        <div className="inline" style={{ marginTop: "1.5rem" }}>
                                <span style={{ fontSize: "1.5rem" }}>
                                    825 <FontAwesomeIcon icon={faEarth} style={{ color: "#037244" }} />
                                </span>
                            <button className="redeem lock" style={{ width: "6rem" }}>
                                <FontAwesomeIcon icon={faLock} />
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
            <Card style={{ padding: "1rem 2rem", marginTop: "1.5rem", animationDelay: ".6s" }}>
                <div className="inline left">
                    <FontAwesomeIcon className="dropShadow" icon={faArchway} style={{ fontSize: "3rem", marginRight: "2rem" }} />
                    <div style={{ flexGrow: "1" }}>
                        <h1>Sewer Tour</h1>
                        <p className="altText" style={{ fontSize: "1.5rem" }}>A guided tour through the Munich Sewers</p>
                        <div className="inline" style={{ marginTop: "1.5rem" }}>
                                <span style={{ fontSize: "1.5rem" }}>
                                    2500 <FontAwesomeIcon icon={faEarth} style={{ color: "#037244" }} />
                                </span>
                            <button className="redeem lock" style={{ width: "6rem" }}>
                                <FontAwesomeIcon icon={faLock} />
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    );
}