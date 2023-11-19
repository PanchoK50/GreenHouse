import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons"

function Header() {
  return (
    <>
        <header className="header">
          <div className="inline" style={{ padding: ".75rem 1rem" }}>
            <h1 className="logo textHuge" style={{ fontFamily: "Varela Round"}}>
              <span style={{color: "#037244"}}>green</span>house
            </h1>
            <p className="textMedium">
              100{" "}
              <span style={{color: "#037244"}}>
                <FontAwesomeIcon icon={faEarthAmericas} />
                <i className="fa-solid fa-earth-americas"></i>
              </span>
            </p>
          </div>
        </header>
    </>
  );
}

export default Header