import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const delayed = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(delayed);
    };
  }, [value, delay]);
  return debounceValue;
};
