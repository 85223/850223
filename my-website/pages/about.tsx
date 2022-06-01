import Head from "next/head";
import Layout from "../components/Layout";
import MyNameCard from "../components/MyNameCard";
import SkillCard from "../components/SkillCard";

const about = () => {
  return (
    <Layout>
      <Head>
        <title>YuHsiang - Resume</title>
      </Head>
      <MyNameCard />
      <SkillCard />
    </Layout>
  );
};

export default about;
