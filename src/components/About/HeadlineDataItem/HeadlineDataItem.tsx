import React from "react";
import styles from "./HeadlineDataItem.module.scss";

export const HeadlineDataItem: React.FC<{ icon: string }> = (props) => (
  <h2>
    <i
      className={[
        styles.HeadlineDataItemIconWrapper,
        `fas fa-${props.icon}`,
      ].join(" ")}
    ></i>{" "}
    {props.children}
  </h2>
);
