import React from "react";
import { ExperienceItemData } from "../ExperienceItemData.model";
import styles from "./ExperienceItem.module.scss";

interface ExperienceItemProps {
  data: ExperienceItemData;
}

const ExperienceItem: React.FC<ExperienceItemProps> = (props) => (
  // <div className={styles.ExperienceItem} data-testid="ExperienceItem">
  //   {JSON.stringify(props.data)}
  // </div>
  <div className={styles.ExperienceItem}>
    <div className={styles.Date}>
      <div>{props.data.date}</div>
      <a rel="noreferrer" target="_blank" href={props.data.site}>
        <img
          className={styles.CompanyLogo}
          src={props.data.logo}
          alt={props.data.logo}
        />
      </a>
    </div>

    <div className={styles.Separator}>
      <div className={styles.Line}></div>
    </div>
    <div className={styles.Content}>
      <h1 className={styles.Title}>{props.data.title}</h1>
      <ul>
        {props.data.items.map((i, idx) => (
          <li className={styles.LineItem} key={idx}>
            {i}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ExperienceItem;
