import styles from "./SignInSignUpButton.module.scss";

interface IProps {
  props: string;
}

function SignInSignUpButton({ props }: IProps): JSX.Element {
  return (
    <>
      <button className={styles.button}>{props}</button>
    </>
  );
}

export default SignInSignUpButton;
