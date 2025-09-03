// Import React hooks
import { useEffect, useState } from "react";

// Custom hook for managing localStorage
const useLocalStroage = (stroageKey, defaultValue) => {
  // State initialized from localStorage or default value
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(stroageKey)) ?? defaultValue
  );

  // Effect to update localStorage when value changes
  useEffect(() => {
    localStorage.setItem(stroageKey, JSON.stringify(value));
  }, [value, stroageKey]);

  // Return value and setter
  return [value, setValue];
};

// Export the hook
export default useLocalStroage;
