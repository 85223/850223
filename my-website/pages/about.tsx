import Layout from "../components/Layout";
import MyNameCard from "../components/MyNameCard";
import SkillCard from "../components/SkillCard";

const about = () => {
  return (
    <Layout>
      <MyNameCard />
      <SkillCard />
    </Layout>
  );
};

export default about;
