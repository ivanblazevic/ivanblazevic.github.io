import React from "react";
import styles from "./Heading.module.scss";

const Heading: React.FC = () => (
  <div data-testid="Heading">
    <div className={styles.HeaderSection}>
      <div className="text-center">
        <img
          className={styles.ProfileImage}
          width="300"
          alt="Angular Logo"
          src="assets/profile_512.jpg"
        />
      </div>

      <div className={styles.ProfileHeadlineData}>
        <h1 className={styles.ProfileName}>Ivan Blažević</h1>
      </div>
    </div>
  </div>
);

export default Heading;
