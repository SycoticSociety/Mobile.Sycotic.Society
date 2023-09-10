// Home.tsx
import {
  ConnectWallet,
  MediaRenderer,
  Web3Button,
  useAddress,
  useContract,
  useContractMetadata,
} from "@thirdweb-dev/react";
import { NFT_CONTRACT_ADDRESS } from "../consts/addresses";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <ConnectWallet btnTitle="Login" className={styles.connectWalletButton} />
      </div>
    </div>
  );
};

export default Home;
