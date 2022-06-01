import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import WorkCard from "../components/WorkCard";
import KindNav from "../components/KindNav";
import config from "../config/file";
import web from "../config/web";
import classes from "./index.module.sass";

const Index = () => {
  // const [workKind, SetWorkKind] = useState<string>("");
  // useEffect(() => console.log(workKind), [workKind]);

  return (
    <Layout>
      {/* <KindNav SetWorkKind={SetWorkKind} /> */}
      <div className={classes.container}>
        <Head>
          <title>YuHsiang - Portfolio</title>
          <meta
            property="og:url"
            content="https://yuhsiang-work-b74t6x5tp-85223.vercel.app/"
          />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="YuHsiang Portfolio" />
          <meta property="og:description" content="YuHsiang Portfolio" />
          <meta property="" />
          <meta
            property="og:image"
            content="https://yuhsiang-work-b74t6x5tp-85223.vercel.app/S__4702210.jpg"
          />
        </Head>
        <div className={classes.root}>
          {config.web.map((item) => (
            <WorkCard
              key={item.id}
              path={item.path}
              title={item.title}
              link={item.link}
              introArr={item.introImg}
              // partner={item.partner}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default Index;
