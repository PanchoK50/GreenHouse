"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

function Navbar() {

  const router = useRouter();

  // Extract the initial active button from the current route
  const [activeButton, setActiveButton] = useState('');
  const pathName = usePathname();

  useEffect(() => {
    const initialActiveButton = (() => {
      switch (pathName) {
        case '/':
          return 'button1';
        case '/rewards':
          return 'button3';
        case '/facts':
          return 'button4';
        default:
          return '';
      }
    })();

    setActiveButton(initialActiveButton);
  }, [pathName]);

    const handleButtonClick = (buttonId: string) => {
      console.log('Button clicked: ', buttonId)
      setActiveButton(buttonId);
      // You can perform additional actions when a button is clicked
    };



  return (
      <div className="nav inline">

      <Link href="/" className={`link ${activeButton === 'button1' ? 'active' : ''}`} onClick={() => handleButtonClick('button1')}>
        Dash
      </Link>

{/*       <Link href="/" className={`link ${activeButton === 'button2' ? 'active' : ''}`} onClick={() => handleButtonClick('button2')}>
        Plan
      </Link> */}

      <Link href="/rewards" className={`link ${activeButton === 'button3' ? 'active' : ''}`} onClick={() => handleButtonClick('button3')}>
        Rewards
      </Link>

      <Link href="/facts" className={`link ${activeButton === 'button4' ? 'active' : ''}`} onClick={() => handleButtonClick('button4')}>
        Facts
      </Link>
    
      </div>
  );
}

export default Navbar