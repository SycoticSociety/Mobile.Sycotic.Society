import React from "react";
import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  paperWallet,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/navbar";
import Header from "../components/header";
import HamburgerMenu from "../components/HamburgerMenu"; // Import the HamburgerMenu component

const activeChain = "polygon";

function MyApp({ Component, pageProps }: AppProps) {
  const photos = [
    "url_to_photo_1",
    "url_to_photo_2",
    "url_to_photo_3",
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
