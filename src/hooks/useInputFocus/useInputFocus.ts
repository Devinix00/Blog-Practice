import { LegacyRef, useEffect, useRef } from "react";

interface IUseInputFocus {
  inputRef?: LegacyRef<HTMLInputElement> | undefined;
}

function useInputFocus(inputType: string | undefined): IUseInputFocus {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputType !== "first") return;
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return { inputRef };
}

export default useInputFocus;
