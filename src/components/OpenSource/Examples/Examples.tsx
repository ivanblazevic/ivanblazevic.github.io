import React from "react";
import BoxGrid from "../../../shared/components/BoxGrid/BoxGrid";
import { OpenSourceItemProps } from "../OpenSourceItem";
import { EXAMPLE_DATA } from "./data";
import styles from "./Examples.module.scss";

const ExampleBox: React.FC<OpenSourceItemProps> = (props) => (
  <>
    <div className={styles.BoxImageContainer}>
      <img alt={props.item.title} src={props.item.img} />
    </div>
    <span className="box-title">{props.item.title}</span>
  </>
);

const Examples: React.FC = () => (
  <BoxGrid data={EXAMPLE_DATA} component={ExampleBox} />
);

export default Examples;
