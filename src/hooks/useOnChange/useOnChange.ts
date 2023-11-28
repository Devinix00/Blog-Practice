import { Dispatch, SetStateAction } from "react";

interface IProps<T> {
  setInputValues: Dispatch<SetStateAction<T>>;
}

interface IUseOnChange {
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

function useOnChange<T>({ setInputValues }: IProps<T>): IUseOnChange {
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;

    setInputValues((inputValues) => ({
      ...inputValues,
      [name]: value,
    }));
  };

  return { onChange };
}

export default useOnChange;
