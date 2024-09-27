import Image from "next/image";
import styles from "./navbar.module.css";
import Menu from "./Menu";
export default function Navbar() {
    return(
        <div className={styles.navbar}>
            <div className={styles.brand}>
                <Image src="/images/sport.ico" alt="" width={50} height={50} />
                <p>KOOORA</p>
            </div>
            <Menu />
        </div>
    )
}