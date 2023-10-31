import Link from "next/link";
import styles from "./SignInSignUpButton.module.scss";

interface IProps {
  props: string;
}

function SignInSignUpButton({ props }: IProps): JSX.Element {
  return (
    <>
      <Link href="signUpPage" className={styles.link}>
        {props}
      </Link>
    </>
  );
}

export default SignInSignUpButton;
