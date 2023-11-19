"use client"
import React, { useState } from 'react'
import Link from 'next/link'

function Navbar() {

    const [activeButton, setActiveButton] = useState('button1');

    const handleButtonClick = (buttonId: string) => {
      console.log('Button clicked: ', buttonId)
      setActiveButton(buttonId);
      // You can perform additional actions when a button is clicked
    };

  return (
    <>
      <div className="nav inline">

      <Link href="/" className={`link textMedium ${activeButton === 'button1' ? 'active' : ''}`} onClick={() => handleButtonClick('button1')}>
        Dash
      </Link>

      <Link href="/" className={`link textMedium ${activeButton === 'button2' ? 'active' : ''}`} onClick={() => handleButtonClick('button2')}>
        Plan
      </Link>

      <Link href="/" className={`link textMedium ${activeButton === 'button3' ? 'active' : ''}`} onClick={() => handleButtonClick('button3')}>
        Rewards
      </Link>

      <Link href="/" className={`link textMedium ${activeButton === 'button4' ? 'active' : ''}`} onClick={() => handleButtonClick('button4')}>
        Facts
      </Link>
    
      </div>
    </>
  );
}

export default Navbar