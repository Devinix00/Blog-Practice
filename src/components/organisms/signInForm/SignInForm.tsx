import SignButton from "@/components/atoms/signButton/SignButton";
import styles from "./SignInForm.module.scss";
import SignInputGroup from "@/components/molecules/signInputGroup/SignInputGroup";

function SignInForm(): JSX.Element {
  return (
    <>
      <form className={styles.signUpContainer}>
        <h2 className={styles.title}>로그인</h2>
        {/* <SignInputGroup
          type="text"
          id="loginId"
          name="loginId"
          labelText="아이디"
          placeholder="아이디를 입력해주세요..."
          required
        />
        <SignInputGroup
          type="password"
          id="password"
          name="password"
          labelText="비밀번호"
          placeholder="비밀번호를 입력해주세요..."
          required
        /> */}
        <SignButton type="submit">로그인</SignButton>
      </form>
    </>
  );
}

export default SignInForm;
