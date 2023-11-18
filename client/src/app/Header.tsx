import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons"

function Header() {
  return (
    <>
        <header className="header">
          <div className="container inline">
            <h1 className="logo" style={{fontSize: "2.5rem"}}>
              <span style={{color: "#16752f"}}>green</span>house.
            </h1>
            <p style={{fontSize: "1.5rem"}}>
              100{" "}
              <span style={{color: "#18ad3b"}}>
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