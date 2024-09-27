import { Suspense } from "react";
import styles from "./page.module.css";
import PageHeader from "@/components/PageHeader/PageHeader";
import PlaceHolder from "@/components/News/PlaceHolder";
import News from "@/components/News/News";

export default function Home() {
  return (
    <>
      <PageHeader props={{name:"Latest News",bg:"rgb(6, 58, 65)", color: "rgb(255, 255, 255"}} />
      <div className={styles.news}>
       <Suspense fallback={<PlaceHolder />}>
       <News />
       </Suspense>
       <Suspense fallback={<PlaceHolder />}>
       <News />
       </Suspense>
      </div>
      
    </>

  );
}
