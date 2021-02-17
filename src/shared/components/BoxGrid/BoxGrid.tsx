import React from "react";
import {
  OpenSourceItem,
  OpenSourceItemProps,
} from "../../../components/OpenSource/OpenSourceItem";
import Box from "../Box/Box";
import styles from "./BoxGrid.module.scss";

interface BoxGridProps {
  data: OpenSourceItem[];
  component: React.FC<OpenSourceItemProps>;
}

const BoxGrid: React.FC<BoxGridProps> = (props) => (
  <div className={styles.BoxGrid}>
    {props.data.map((item, idx) => (
      <Box key={idx} idx={idx} href={item.link}>
        <props.component item={item} />
      </Box>
    ))}
  </div>
);

export default BoxGrid;
