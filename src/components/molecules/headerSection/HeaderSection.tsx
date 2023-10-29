"use client";

import Logo from "@/components/atoms/logo/Logo";
import styles from "./HeaderSection.module.scss";
import UserButton from "@/components/atoms/userButton/UserButton";
import PostLink from "@/components/common/postLink/PostLink";
import SignInSignUpButton from "@/components/common/signInSignUpButton/SignInSignUpButton";
import { usePathname } from "next/navigation";

function HeaderSection(): JSX.Element {
  const pathname = usePathname();

  return (
    <>
      <div className={styles.container}>
        <div>
          <Logo type="header" />
        </div>
        <div className={styles.userContainer}>
          {pathname !== "/userPage" && <PostLink props="write" type="header" />}
          <SignInSignUpButton props="Sign Up" />
          <UserButton />
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
