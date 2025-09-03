import { useEffect, useState } from "react";

const useLocalStroage = (stroageKey, defaultValue) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(stroageKey)) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(stroageKey, JSON.stringify(value));
  }, [value, stroageKey]);

  return [value, setValue];
};

export default useLocalStroage;
