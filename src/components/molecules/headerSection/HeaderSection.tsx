"use client";

import Logo from "@/components/atoms/logo/Logo";
import styles from "./HeaderSection.module.scss";
import UserButton from "@/components/atoms/userButton/UserButton";
import { usePathname } from "next/navigation";
import PostLink from "../postLink/PostLink";
import SignInSignUpButton from "@/components/atoms/signInSignUpButton/SignInSignUpButton";
import Link from "next/link";

function HeaderSection(): JSX.Element {
  const pathname = usePathname();
  const excludedPaths = ["/userPage", "/createPostPage"];

  return (
    <>
      <div className={styles.container}>
        <div>
          <Logo type="header" />
        </div>
        <div className={styles.userContainer}>
          {!excludedPaths.includes(pathname) && (
            <PostLink props="write" type="header" />
          )}
          <SignInSignUpButton props="Sign In" />
          {/* <SignInSignUpButton props="Sign Up" /> */}
          <div className={styles.signUpContainer}>
            <Link href="signUpPage" className={styles.link}>
              회원가입
            </Link>
          </div>
          <UserButton />
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
