import Layout from "../components/Layout";
import WorkCard from "../components/WorkCard";
import KindNav from "../components/KindNav";
import { useEffect, useState } from "react";
import config from "../config/file";
import web from "../config/web";
import Link from "next/link";
import classes from "./index.module.sass";

const Index = () => {
  // const [workKind, SetWorkKind] = useState<string>("");
  // useEffect(() => console.log(workKind), [workKind]);

  return (
    <Layout>
      {/* <KindNav SetWorkKind={SetWorkKind} /> */}
      <div className={classes.container}>
        <div className={classes.root}>
          {config.web.map((item) => (
            <WorkCard
              key={item.id}
              path={item.path}
              title={item.title}
              link={item.link}
              introArr={item.introImg}
              partner={item.partner}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default Index;
