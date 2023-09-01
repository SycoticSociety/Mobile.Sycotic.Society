import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  smartWallet,
  localWallet,
  paperWallet,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/navbar";
import Header from "../components/header";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "polygon";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
        activeChain="polygon"
        clientId="690261969c7023f7bfee4aae4dba4425"
        supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
          
            localWallet(),
            paperWallet({
           paperClientId: "5c6a293d-21bd-4c8b-bc08-f722ea5168a6",
        }),
      ]}
    >
      <Header />
      <Component {...pageProps} />
       <ConnectWallet theme={"dark"} />
      <Navbar />
    </ThirdwebProvider>
  );
}

export default MyApp;
