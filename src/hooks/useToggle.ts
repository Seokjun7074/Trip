import { useState } from "react";

const useToggle = (initToggle: boolean) => {
  const [isToggle, setIsToggle] = useState(initToggle);
  return {
    isToggle,
    onChange: () => setIsToggle(!isToggle),
  };
};

export default useToggle;
