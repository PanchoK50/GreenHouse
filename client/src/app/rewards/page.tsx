"use client";

import Card from "@/components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarth,
  faPersonBiking,
  faArchway,
  faLock,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";

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

const codeToCopy = "ff34-ad15-b7c0-fff0";

function CopyToClipboardButton({ text } : { text: string }) {
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    } catch (error) {
      console.error("Unable to copy to clipboard", error);
      // Handle the error accordingly
    }
  };

  return <div onClick={handleCopyClick}>
    <div className="code">{codeToCopy}</div>
  </div>;
}

export default function Page() {

  return (
    <>
      <Card style={{ padding: "1rem 2rem" }}>
        <div className="inline left">
          <FontAwesomeIcon
            className="dropShadow"
            icon={faPersonBiking}
            style={{ fontSize: "3rem", marginRight: "2rem" }}
          />
          <div style={{ flexGrow: "1" }}>
            <h1>MVG-Rad</h1>
            <p className="altText" style={{ fontSize: "1.5rem" }}>
              30 free minutes of MVG-Rad
            </p>
            <div className="inline" style={{ marginTop: "1.5rem" }}>
              <span style={{ fontSize: "1.5rem" }}>
                100{" "}
                <FontAwesomeIcon icon={faEarth} style={{ color: "#037244" }} />
              </span>
              <button className="redeem" onClick={togglePopup}>
                Redeem
              </button>
            </div>
          </div>
        </div>
      </Card>
      <Card
        style={{
          padding: "1rem 2rem",
          marginTop: "1.5rem",
          animationDelay: ".3s",
        }}
      >
        <div className="inline left">
          <FontAwesomeIcon
            className="dropShadow"
            icon={faBuildingColumns}
            style={{ fontSize: "3rem", marginRight: "2rem" }}
          />
          <div style={{ flexGrow: "1" }}>
            <h1>Museum Ticket</h1>
            <p className="altText" style={{ fontSize: "1.5rem" }}>
              One month free entry to any museum in Munich
            </p>
            <div className="inline" style={{ marginTop: "1.5rem" }}>
              <span style={{ fontSize: "1.5rem" }}>
                825{" "}
                <FontAwesomeIcon icon={faEarth} style={{ color: "#037244" }} />
              </span>
              <button className="redeem lock" style={{ width: "6rem" }}>
                <FontAwesomeIcon icon={faLock} />
              </button>
            </div>
          </div>
        </div>
      </Card>
      <Card
        style={{
          padding: "1rem 2rem",
          marginTop: "1.5rem",
          animationDelay: ".6s",
        }}
      >
        <div className="inline left">
          <FontAwesomeIcon
            className="dropShadow"
            icon={faArchway}
            style={{ fontSize: "3rem", marginRight: "2rem" }}
          />
          <div style={{ flexGrow: "1" }}>
            <h1>Sewer Tour</h1>
            <p className="altText" style={{ fontSize: "1.5rem" }}>
              A guided tour through the Munich Sewers
            </p>
            <div className="inline" style={{ marginTop: "1.5rem" }}>
              <span style={{ fontSize: "1.5rem" }}>
                2500{" "}
                <FontAwesomeIcon icon={faEarth} style={{ color: "#037244" }} />
              </span>
              <button className="redeem lock" style={{ width: "6rem" }}>
                <FontAwesomeIcon icon={faLock} />
              </button>
            </div>
          </div>
        </div>
      </Card>

      <div id="rewardsPopup" className="rewardsPopup hidden">
        <div className="rewardsInner">
          <div
            style={{
              width: "100%",
              height: "100%",
              boxSizing: "border-box",
              padding: "2rem 2rem 6rem 2rem",
              position: "relative",
            }}
          >
            <h1 style={{ color: "#037244" }}>Claim your reward!</h1>
            <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
              You have activated the reward: MVG-Rad. Go claim your free minutes
              now!
            </p>
                <CopyToClipboardButton text={codeToCopy} />
            
            <div style={{ textAlign: "center" }}>
              <span style={{ color: "darkgray" }}>Not an actual code :c</span>
            </div>
            <button className="buttonClose" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
