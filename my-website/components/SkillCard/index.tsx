import classes from "./SkillCard.module.sass";
const SkillCard = () => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.content}>
          <h4 className={classes.title}>網頁前端技能</h4>
          <ul className={classes.list}>
            <li>
              <span>Basics：</span>Html5｜CSS3｜RWD｜JavaScript
            </li>
            <li>
              <span>Styling：</span>Sass｜CSS in JS｜Antd
            </li>
            <li>
              <span>Frontend Frameworks：</span>React | Next & hooks Building
            </li>
            <li>
              <span>tools：</span>Npm & Yarn Dev
            </li>
            <li>
              <span>skills：</span> Git Version Control
            </li>
          </ul>
        </div>
        <div className={classes.content}>
          <h4 className={classes.title}>其他技能</h4>
          <ul className={classes.list}>
            <li>
              <span>程式語言：</span> C#
            </li>
            <li>
              <span>遊戲及數位內容開發：</span> Unity3D｜Unreal4
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SkillCard;
