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
      <div className={styles.TabsContainer}>
        <RoundedButton
          label="libraries"
          active={(view as View) === (View.Libraries as View)}
          onClick={() => setView(View.Libraries)}
        />

        <RoundedButton
          label="code examples"
          active={(view as View) === (View.Examples as View)}
          onClick={() => setView(View.Examples)}
        />
      </div>

      {(view as View) === (View.Libraries as View) && <Libraries />}

      {(view as View) === (View.Examples as View) && <Examples />}
    </>
  );
};

export default OpenSource;
