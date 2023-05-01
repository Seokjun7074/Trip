import { useCallback, useState } from "react";

const useInput = (initialInput: any) => {
  const [value, setValue] = useState(initialInput);
  const onChange = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);
  return [value, setValue, onChange];
};

export default useInput;
