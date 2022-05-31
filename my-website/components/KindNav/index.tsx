import { createContext, useState, useContext } from "react";
import classes from "./KindNav.module.sass";
interface Props {
  SetWorkKind: React.Dispatch<React.SetStateAction<string>>;
}

const KindNav = ({ SetWorkKind }: Props) => {
  const selectWrokKind = (kind: string) => SetWorkKind(kind);

  return (
    <nav className={classes.nav}>
      <ul>
        <li onClick={() => selectWrokKind("all")}>all </li>
        <li onClick={() => selectWrokKind("web")}>web</li>
        <li onClick={() => selectWrokKind("ARVR")}>AR/VR</li>
      </ul>
    </nav>
  );
};

export default KindNav;
