import classes from "./DropAnimation.module.sass";

const DropAnimation = () => {
  return (
    <div className={classes.container}>
      <div className={classes.drop}></div>
      <div className={classes.drop}></div>
      <div className={classes.drop}></div>
      <div className={classes.collection}></div>
    </div>
  );
};

export default DropAnimation;
