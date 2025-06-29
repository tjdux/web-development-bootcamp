import { useEffect, useState } from "react";

export const useTime = function (refreshCycle = 1000) {
  const [now, setNow] = useState(getTime());

  useEffect(() => {
    const interValid = setInterval(() => {
      setNow(getTime());
    }, refreshCycle);

    return () => clearInterval(interValid);
  }, [refreshCycle]);

  return now;
};

const getTime = function () {
  return new Date();
};
