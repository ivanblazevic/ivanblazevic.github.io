import React, { FC } from "react";
import styles from "./MainBox.module.scss";

interface MainBoxProps {}

const MainBox: FC<MainBoxProps> = (props) => (
  <div className={styles.MainBox} data-testid="MainBox">
    {props.children}
  </div>
);

export default MainBox;
