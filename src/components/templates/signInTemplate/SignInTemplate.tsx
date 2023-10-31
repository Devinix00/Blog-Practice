import SignInForm from "@/components/organisms/signInForm/SignInForm";
import styles from "./SignInTemplate.module.scss";

function SignInTemplate(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <SignInForm />
      </div>
    </>
  );
}

export default SignInTemplate;
