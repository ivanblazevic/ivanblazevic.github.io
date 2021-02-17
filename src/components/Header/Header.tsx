import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import HeaderItem from "./HeaderItem/HeaderItem";

const Header: React.FC = () => (
  <nav className={styles.Header} data-testid="Header">
    <Link to="/">
      <div id={styles.Logo}>
        <div className={styles.ProfileImage}>
          <img src="profile_124.jpg" alt="profile" />
        </div>

        <div id={styles.Title}>
          <div>ivan</div>
          <div>blažević</div>
        </div>
      </div>
    </Link>

    <ul>
      <HeaderItem label="Experience" icon="briefcase" to="/experience" />
      <HeaderItem label="Open Source" icon="file-code" to="/open-source" />
      <HeaderItem label="About Me" icon="user" to="/about" />
    </ul>
  </nav>
);

export default Header;
