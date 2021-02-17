import React from "react";
import styles from "./Experience.module.scss";
import { EXPERIENCES } from "./data";
import ExperienceItem from "./ExperienceItem/ExperienceItem";

const Experience: React.FC = () => (
  <div className={styles.Experience} data-testid="Experience">
    {EXPERIENCES.map((e, idx) => (
      <ExperienceItem key={idx} data={e} />
    ))}
  </div>
);

export default Experience;
