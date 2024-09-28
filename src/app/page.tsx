import { Suspense } from "react";
import styles from "./page.module.css";
import PageHeader from "@/components/PageHeader/PageHeader";
import PlaceHolder from "@/components/News/PlaceHolder";
import News from "@/components/News/News";
import { sql } from "@vercel/postgres";

export default async function Home() {
  await sql`  
  CREATE TABLE IF NOT EXISTS sport_news (  
    id SERIAL PRIMARY KEY,  
    title VARCHAR(255) NOT NULL,  
    content TEXT NOT NULL,  
    image VARCHAR(255),
    date VARCHAR(255) 
  );  
`; 
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
