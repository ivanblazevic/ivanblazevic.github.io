import React from "react";
import MainBox from "../../shared/components/MainBox/MainBox";
import styles from "./Heading.module.scss";

const Heading: React.FC = () => (
  <div data-testid="Heading">
    <h3>Senior Frontend developer</h3>
    <MainBox>
      <div className={styles.HeaderSection}>
        <img
          className={styles.ProfileImage}
          width="300"
          alt="Angular Logo"
          src="assets/profile_512.png"
        />

        <div className={styles.BasicInfo}>
          <h1 className={styles.ProfileName}>ing. Ivan Blažević</h1>
          <div className={styles.ProfileHeadlineData}>
            <ul>
              <li>+10 years of professional web development experience</li>
              <li>frontend architect, lead developer</li>
              <li>Angular, React, Typescript</li>
              <li>Frontend components and libraries</li>
              <li>Microfrontends architecture</li>
              <li>Backend services</li>
              <li>CI/CD integrations</li>
            </ul>
          </div>
        </div>
      </div>
    </MainBox>
  </div>
);

export default Heading;
