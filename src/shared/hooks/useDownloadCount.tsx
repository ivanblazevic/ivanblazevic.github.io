import { useEffect, useState } from "react";
import getDownloadCount from "../utils/getDownloadCount";

export const useDownloadCount = (packageName: string | undefined) => {
  const [count, setCount] = useState(0);

  const init = () => {
    getDownloadCount(packageName).then((r) => {
      setCount(r);
    });
  };

  useEffect(init, [packageName]);

  return count;
};
