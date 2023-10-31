"use client";

import Logo from "@/components/atoms/logo/Logo";
import styles from "./HeaderSection.module.scss";
import UserButton from "@/components/atoms/userButton/UserButton";
import { usePathname } from "next/navigation";
import PostLink from "../postLink/PostLink";
import SignInSignUpButton from "@/components/atoms/signInSignUpButton/SignInSignUpButton";

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
          <SignInSignUpButton props="Sign Up" />
          <UserButton />
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
