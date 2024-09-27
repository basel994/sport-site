import Image from "next/image";
import styles from "./news.module.css";
import Link from "next/link";
export default async function News() {
    await new Promise((resolve)=>setTimeout(resolve,5000));
    return(
        <div className={styles.newContainer}>
            <div className={styles.leftSide}>
                <p>27/9/2024</p>
                <Image src="/images/new.png" alt="" width={100} height={100}/>
            </div>
            <div className={styles.rightSide}>
                <h3>this is the first new</h3>
                <p>
                    here we will write the details of this new ..............
                </p>
                <Link href="/">Show</Link>
            </div>
        </div>
    )
}