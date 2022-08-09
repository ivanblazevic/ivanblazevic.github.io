import React from "react";
// import Examples from "./Examples/Examples.lazy";
import Libraries from "./Libraries/Libraries.lazy";

const OpenSource: React.FC = () => {
  return (
    <>
      <h3>Community Contributions</h3>

      <Libraries />
      {/* <Examples /> */}
    </>
  );
};

export default OpenSource;
