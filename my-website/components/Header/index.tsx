import classes from "./Header.module.sass";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [icon, SetIcon] = useState(classes.nav__toggler);
  const [active, setActive] = useState(classes.navbar);
  const navToggle = () => {
    if (active === classes.navbar) {
      setActive(classes.navbar + " " + classes.navbar__active);
    } else setActive(classes.navbar);

    // Icon Toggler
    if (icon === classes.nav__toggler) {
      SetIcon(classes.nav__toggler + " " + classes.toggle);
    } else SetIcon(classes.nav__toggler);
  };
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Yu Hsiang</h1>
      <nav>
        <div className={active}>
          <Link href="/">
            <a className={classes.text}>work</a>
          </Link>
          <Link href="/about">
            <a className={classes.text}>about</a>
          </Link>
        </div>
        <div onClick={navToggle} className={icon}>
          <div className={classes.line1}></div>
          <div className={classes.line2}></div>
          <div className={classes.line3}></div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
