"use client"
import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import { menu, MenuType } from "./menu";
import { useRef } from "react";
export default function Menu() {
    const pathName = usePathname();
    const linksRef = useRef<HTMLDivElement>(null);
    const collapseRef = useRef<HTMLDivElement>(null);
    const collapseHandle = () => {
        collapseRef.current?.classList.toggle(styles.closeCollapse);
        linksRef.current?.classList.toggle(styles.collapseLinks);
    }
    return(
        <div className={styles.linksContainer}>
            <div className={styles.links} ref={linksRef}>
            {
                menu.map((link:MenuType)=> {
                    return(
                        <Link 
                        key={link.id}
                        href={link.href}
                        className={pathName===link.href ? styles.active : ""}>
                            {link.name}
                        </Link>
                    );
                })
            }
            </div>
            <div className={styles.collapse} onClick={collapseHandle} ref={collapseRef}><span></span></div>
        </div>
    )
}