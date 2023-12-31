import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './Header'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../../../style_template/style.css'
import Navbar from './Navbar'
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: 'GreenHouse',
  description: 'The battle against climate change starts with you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Varela%20Round" />
      </head>
      <body>
        <Header />
        <Container>
          <Navbar />
          {children}
        </Container>
      </body>
    </html>
  );
}
