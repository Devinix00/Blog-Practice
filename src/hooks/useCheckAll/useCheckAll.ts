interface IProps {
  isCheckedAll: number[];
  setIsCheckedAll: React.Dispatch<React.SetStateAction<number[]>>;
  currentContents: IPost[];
}

interface IUseCheckAll {
  handleSingleCheck: (checked: boolean, id: number) => void;
  handleAllCheck: (checked: boolean) => void;
}

function useCheckAll({
  isCheckedAll,
  setIsCheckedAll,
  currentContents,
}: IProps): IUseCheckAll {
  const handleSingleCheck = (checked: boolean, id: number): void => {
    if (checked) {
      setIsCheckedAll((prev: number[]) => [...prev, id]);
    } else {
      setIsCheckedAll(isCheckedAll.filter((el) => el !== id));
    }
  };

  const handleAllCheck = (checked: boolean): void => {
    if (checked) {
      const idArray: number[] = [];
      currentContents.forEach((el) => idArray.push(el.id));
      setIsCheckedAll(idArray);
    } else {
      setIsCheckedAll([]);
    }
  };

  return { handleSingleCheck, handleAllCheck };
}

export default useCheckAll;
