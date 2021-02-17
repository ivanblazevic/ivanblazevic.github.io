import React from "react";
import styles from "./RoundedButton.module.scss";

interface RoundedButtonProps {
  label: string;
  active: boolean;
  onClick: any;
}

const RoundedButton: React.FC<RoundedButtonProps> = (props) => (
  <div
    className={[styles.RoundedButton, props.active ? styles.Active : ""].join(
      " "
    )}
    onClick={props.onClick}
  >
    {props.label}
  </div>
);

export default RoundedButton;
