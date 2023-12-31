import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons"

function Header() {

  // Function to generate a random number between 90 and 110
  const generateRandomNumber = () : number => {
    const min = 90;
    const max = 110;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


  const randomBalance = generateRandomNumber();
  // Generate the initial random number on component mount

  return (
    <>
        <header className="header">
          <div className="inline" style={{ padding: ".75rem 1rem" }}>
            <h1 className="logo textHuge" style={{ fontFamily: "Varela Round"}}>
              <span style={{color: "#037244"}}>green</span>house
            </h1>
            <p className="textMedium">
              113{" "}
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