import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Header() {
    return(
        <div className={styles.header}>
            <Image src={"/images/Thirdweb-Icon-Circle-Black-08 1.gif"} alt="" height={60} width={60}/>
            <p>Sycotic Society Moblie Application</p>
        </div>
    )
};
