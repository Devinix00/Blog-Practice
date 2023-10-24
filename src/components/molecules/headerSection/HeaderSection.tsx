import Logo from "@/components/atoms/logo/Logo";
import styles from "./HeaderSection.module.scss";
import UserButton from "@/components/atoms/userButton/UserButton";
import PostLink from "@/components/common/postLink/PostLink";
import SignInSignUpButton from "@/components/common/signInSignUpButton/SignInSignUpButton";

function HeaderSection(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div>
          <Logo type="header" />
        </div>
        <div className={styles.userContainer}>
          <PostLink props="write" />
          <SignInSignUpButton props="Sign Up" />
          <UserButton />
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
