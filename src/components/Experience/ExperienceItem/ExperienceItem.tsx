import React from "react";
import MainBox from "../../../shared/components/MainBox/MainBox";
import { ExperienceItemData } from "../ExperienceItemData.model";
import styles from "./ExperienceItem.module.scss";

interface ExperienceItemProps {
  data: ExperienceItemData;
}

const ExperienceItem: React.FC<ExperienceItemProps> = (props) => (
  <MainBox>
    <div className={styles.DateContainer}>
      <a rel="noreferrer" target="_blank" href={props.data.site}>
        <img
          className={styles.CompanyLogo}
          src={props.data.logo}
          alt={props.data.logo}
        />
      </a>
      <div className={styles.Date}>{props.data.date}</div>
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
  </MainBox>
);

export default ExperienceItem;
