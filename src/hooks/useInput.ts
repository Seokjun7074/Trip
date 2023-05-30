import { useCallback, useState } from 'react';

const useInput = (initialInput: string) => {
  const [value, setValue] = useState(initialInput);
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, setValue, onChange] as const;
};

export default useInput;
