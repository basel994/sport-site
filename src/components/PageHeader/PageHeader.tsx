import Image from "next/image";
import styles from "./pageHeader.module.css";

export default function PageHeader(
    {props}:{props: {
        name: string,
        img?: string,
        color?: string,
        bg?:string,
    }}) {
        return(
            <div className={styles.header} style={{backgroundColor:props.bg}}>
                <h1 style={{color:props.color}}>{props.name}</h1>
                {
                props.img&&(
                    <Image src={props.img} alt="" />
                )
                }
            </div>
        )
}