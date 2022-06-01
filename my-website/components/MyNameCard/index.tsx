import classes from "./MyNameCard.module.sass";

const MyNameCard = () => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.photoContainer}>
          <img className={classes.photo} src="/myPhoto.png" alt="my photo" />
        </div>
        <div className={classes.information}>
          <h2 className={classes.name}>石宇翔</h2>
          <ul className={classes.intro}>
            <li>Born in 1996,Taoyuan,TW • H24364032@gmail.com </li>
            <li>長榮大學 資訊暨設計碩士學位學程</li>
            <li>長榮大學 資訊管理學系學士</li>
          </ul>
          <h5 className={classes.jobTitle}>前端工程師</h5>
          <hr></hr>
          <ul className={classes.describe}>
            <li>您好，我是石宇翔</li>
            <li>半年前剛從unity工程師轉成react前端工程師</li>
            <li>目前專職於使用 Next.js (React) 及前端相關技術進行專案開發。</li>
          </ul>
          <div className={classes.circle}></div>
        </div>
      </div>
    </div>
  );
};

export default MyNameCard;
