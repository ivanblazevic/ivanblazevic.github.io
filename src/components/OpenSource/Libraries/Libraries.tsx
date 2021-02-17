import React from "react";
import BoxGrid from "../../../shared/components/BoxGrid/BoxGrid";
import { useDownloadCount } from "../../../shared/hooks/useDownloadCount";
import { OpenSourceItemProps } from "../OpenSourceItem";
import { LIBRARY_DATA } from "./data";
import styles from "./Libraries.module.scss";

const LibraryBox: React.FC<OpenSourceItemProps> = (props) => {
  const count = useDownloadCount(props.item.package);

  return (
    <div className={styles.LibraryBox}>
      <span className={styles.BoxTitle}>{props.item.title}</span>
      <div className={styles.BoxDescription}>{props.item.description}</div>
      <span className={styles.BoxDownloads}>{count} Downloads</span>
    </div>
  );
};

const Libraries: React.FC = () => (
  <BoxGrid data={LIBRARY_DATA} component={LibraryBox} />
);

export default Libraries;
