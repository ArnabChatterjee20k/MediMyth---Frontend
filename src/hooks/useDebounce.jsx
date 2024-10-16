import { useState, useEffect } from "react";

export default function useDebounce(value, delay) {
  const [debouncedVal, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedVal;
}
