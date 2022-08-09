import React, { useState } from "react";
import Examples from "./Examples/Examples.lazy";
import Libraries from "./Libraries/Libraries.lazy";
import styles from "./OpenSource.module.scss";
import RoundedButton from "./RoundedButton/RoundedButton";

enum View {
  Libraries,
  Examples,
}

const OpenSource: React.FC = () => {
  const [view, setView] = useState<View>(View.Libraries);

  return (
    <>
      <h3>Community Contributions</h3>

      {(view as View) === (View.Libraries as View) && <Libraries />}

      {(view as View) === (View.Examples as View) && <Examples />}
    </>
  );
};

export default OpenSource;
