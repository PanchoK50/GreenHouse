import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons"

function Header() {
  return (
    <>
      <header>
        <div className="header">
          <div className="container inline">
            <h1 className="logo" style={{fontSize: "2.5rem"}}>
              <span style={{color: "#18ad3b"}}>green</span>house.
            </h1>
            <p style={{fontSize: "1.5rem"}}>
              100{" "}
              <span style={{color: "#18ad3b"}}>
                <FontAwesomeIcon icon={faEarthAmericas} />
                <i className="fa-solid fa-earth-americas"></i>
              </span>
            </p>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header