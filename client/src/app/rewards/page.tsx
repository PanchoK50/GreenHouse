'use client'

import Card from "@/components/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEarth, faPersonBiking, faArchway, faLock, faBuildingColumns} from "@fortawesome/free-solid-svg-icons";


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
            <Card style={{ padding: "1rem 2rem" }}>
                <div className="inline left">
                    <FontAwesomeIcon className="dropShadow" icon={faPersonBiking} style={{ fontSize: "3rem", marginRight: "2rem" }} />
                    <div style={{ flexGrow: "1" }}>
                        <h1 className="textBig">MVG-Rad</h1>
                        <p className="altText textSmall">30 free minutes of MVG-Rad</p>
                        <div className="inline" style={{ marginTop: "1.5rem" }}>
                            <span className="textMedium">
                                100 <FontAwesomeIcon icon={faEarth} style={{ color: "#037244" }} />
                            </span>
                            <button className="redeem textSmall" onClick={togglePopup}>
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
                        <h1 className="textBig">Museum Ticket</h1>
                        <p className="altText textSmall">One month free entry to any museum in Munich</p>
                        <div className="inline" style={{ marginTop: "1.5rem" }}>
                            <span className="textMedium">
                                825 <FontAwesomeIcon icon={faEarth} style={{ color: "#037244" }} />
                            </span>
                            <button className="redeem lock textSmall" style={{ width: "6rem" }}>
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
                        <h1 className="textBig">Sewer Tour</h1>
                        <p className="altText textSmall">A guided tour through the Munich Sewers</p>
                        <div className="inline" style={{ marginTop: "1.5rem" }}>
                            <span className="textMedium">
                                2500 <FontAwesomeIcon icon={faEarth} style={{ color: "#037244" }} />
                            </span>
                            <button className="redeem lock textSmall" style={{ width: "6rem" }}>
                                <FontAwesomeIcon icon={faLock} />
                            </button>
                        </div>
                    </div>
                </div>
            </Card>

            <div id="rewardsPopup" className="rewardsPopup hidden">
                <div className="rewardsInner">
                    <div style={{ width: "100%", height: "100%", boxSizing: "border-box", padding: "2rem 2rem 6rem 2rem", position: "relative" }}>
                        <h1 style={{ color: "#037244" }}>Claim your reward!</h1>
                        <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
                            You have activated the reward: MVG-Rad. Go claim your free minutes now!
                        </p>
                        <div className="code">ff34-ad15-b7c0-fff0</div>
                        <div style={{ textAlign: "center" }}><span style={{ color: "darkgray" }}>Not an actual code :c</span></div>
                        <button className="buttonClose" onClick={togglePopup}>Close</button>
                    </div>
                </div>
            </div>
        </>
    );
}