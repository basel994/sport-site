import styles from "./news.module.css";
export default function PlaceHolder() {
    return(
        <div className={styles.newContainerHolder}>
            <div className={styles.leftSide}>
                <p style={{backgroundColor:"rgba(0,0,0,0.3)",width:"3rem", height:"0.8rem"}}></p>
                <div style={{backgroundColor:"rgba(0,0,0,0.3)",width:"100px", height:"100px"}}></div>
            </div>
            <div className={styles.rightSide}>
                <h3 style={{backgroundColor:"rgba(0,0,0,0.3)",width:"6rem", height:"0.8rem"}}></h3>
                <p style={{backgroundColor:"rgba(0,0,0,0.3)",width:"10rem", height:"0.8rem"}}></p>
            </div>
        </div>
    )
}