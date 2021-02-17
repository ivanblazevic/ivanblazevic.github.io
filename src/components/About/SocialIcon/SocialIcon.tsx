import React from "react";
import styles from "./SocialIcon.module.scss";

export const SocialIcon: React.FC<{ url: string; icon: string }> = (props) => (
  <div className={styles.SocialIcon}>
    <a target="_blank" rel="noreferrer" href={props.url}>
      <i className={`fab fa-${props.icon}`}></i>
    </a>
  </div>
);
