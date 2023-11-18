"use client"
import React, { useState } from 'react'
import Link from 'next/link'

function Navbar() {

    const [activeButton, setActiveButton] = useState('button0');

    const handleButtonClick = (buttonId: string) => {
      console.log('Button clicked: ', buttonId)
      setActiveButton(buttonId);
      // You can perform additional actions when a button is clicked
    };

  return (
    <>
      <div className="nav container">

      <Link href="/" className={`link ${activeButton === 'button1' ? 'active' : ''}`} onClick={() => handleButtonClick('button1')}>
        Button 1
      </Link>

      <Link href="/" className={`link ${activeButton === 'button2' ? 'active' : ''}`} onClick={() => handleButtonClick('button2')}>
        Button 2
      </Link>

      <Link href="/" className={`link ${activeButton === 'button3' ? 'active' : ''}`} onClick={() => handleButtonClick('button3')}>
        Button 3
      </Link>

      <Link href="/" className={`link ${activeButton === 'button4' ? 'active' : ''}`} onClick={() => handleButtonClick('button4')}>
        Button 4
      </Link>
    
      </div>
    </>
  );
}

export default Navbar