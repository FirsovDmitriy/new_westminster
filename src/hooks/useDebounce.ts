import React from "react";

const useDebounce = (value: string ,delay = 500) => {

  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [value, delay]);

	return debouncedValue;
};

export default useDebounce;