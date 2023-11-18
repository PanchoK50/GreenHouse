import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header>
        <p>I am a Header</p>
        <Link href="/">Home</Link>
    </header>
  )
}

export default Header