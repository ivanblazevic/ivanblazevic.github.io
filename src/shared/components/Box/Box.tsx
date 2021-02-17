import { Howl } from "howler";
import React from "react";
import styles from "./Box.module.scss";

interface BoxProps {
  href?: string;
  idx: number;
}

const sound = new Howl({
  src: ["assets/sounds/ui_tap-variant-01.wav"],
});

const Box: React.FC<BoxProps> = (props) => {
  const onHover = () => {
    sound.play();
  };

  return (
    <div className={styles.BoxItem}>
      <a
        target="_blank"
        rel="noreferrer"
        href={props?.href}
        onMouseEnter={onHover}
        className={styles.SlideInFwdCenter}
        style={{ animationDelay: `${props.idx * 0.2}s` }}
      >
        <div className={styles.Box}>{props.children}</div>
      </a>
    </div>
  );
};

export default Box;
