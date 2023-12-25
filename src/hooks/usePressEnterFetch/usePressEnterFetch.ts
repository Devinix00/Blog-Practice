interface IProps {
  handleSubmit: (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) => void;
}

function usePressEnterFetch({ handleSubmit }: IProps) {
  const handlePressEnterFetch = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return { handlePressEnterFetch };
}

export default usePressEnterFetch;
