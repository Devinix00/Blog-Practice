import SignButton from "@/components/atoms/signButton/SignButton";
import styles from "./SignUpForm.module.scss";
import SignInputGroup from "@/components/molecules/signInputGroup/SignInputGroup";

function SignUpForm(): JSX.Element {
  return (
    <>
      <div className={styles.signUpContainer}>
        <h2 className={styles.title}>회원가입</h2>
        <SignInputGroup
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
        />
        <SignInputGroup
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          labelText="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요..."
          required
        />
        <SignButton type="submit">가입하기</SignButton>
      </div>
    </>
  );
}

export default SignUpForm;
