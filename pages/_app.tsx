import React from "react";
import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  // ...other imports
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/navbar";
import Header from "../components/header";
import HamburgerMenu from "../components/HamburgerMenu"; // Import the HamburgerMenu component

const activeChain = "polygon";

function MyApp({ Component, pageProps }: AppProps) {
  const photos = [
    "/immages/hamburger.png",
    "/images/hamburger2.png",
    "/images/hamburger3.png",
  ];

  return (
    <ThirdwebProvider
      activeChain="polygon"
      clientId="690261969c7023f7bfee4aae4dba4425"
      supportedWallets={[
        // ...supported wallets
      ]}
    >
      <Header />
      <HamburgerMenu photos={photos} /> {/* Use the HamburgerMenu component */}
      <Component {...pageProps} />
      <Navbar />
    </ThirdwebProvider>
  );
}

export default MyApp;
