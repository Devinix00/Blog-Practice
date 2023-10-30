import styles from "./AllCheckbox.module.scss";

interface IProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function AllCheckbox({ checked, onChange }: IProps): JSX.Element {
  return (
    <>
      <input
        type="checkbox"
        className={styles.allCheckbox}
        checked={checked}
        onChange={onChange}
      />
    </>
  );
}

export default AllCheckbox;
