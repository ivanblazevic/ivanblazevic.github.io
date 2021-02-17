import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeaderItem.module.scss";

interface HeaderItemProps {
  label: string;
  icon: string;
  to: string;
}

const HeaderItem: React.FC<HeaderItemProps> = (props) => (
  <li className={styles.HeaderItem}>
    <NavLink to={props.to} activeClassName={styles.Active}>
      <i className={`Icon fas fa-${props.icon}`}></i>
      {props.label}
    </NavLink>
  </li>
);

export default HeaderItem;
