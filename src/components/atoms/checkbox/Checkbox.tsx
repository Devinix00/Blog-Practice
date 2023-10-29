import styles from "./Checkbox.module.scss";

function Checkbox(): JSX.Element {
  return (
    <>
      <input type="checkbox" className={styles.checkbox} />
    </>
  );
}

export default Checkbox;
