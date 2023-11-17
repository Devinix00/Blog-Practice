import UpdateInput from "@/components/atoms/updateInput/UpdateInput";
import styles from "./UpdateInputGroup.module.scss";
import UpdateLabel from "@/components/atoms/updateLabel/UpdateLabel";

interface IProps {
  labelText: string;
  inputType: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function UpdateInputGroup({
  labelText,
  inputType,
  name,
  value,
  onChange,
}: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <UpdateLabel labelText={labelText} />
        <UpdateInput inputType={inputType} name={name} value={value} onChange={onChange}/>
      </div>
    </>
  );
}

export default UpdateInputGroup;
