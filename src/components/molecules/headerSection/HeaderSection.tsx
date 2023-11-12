"use client";

import Logo from "@/components/atoms/logo/Logo";
import styles from "./HeaderSection.module.scss";
import UserButton from "@/components/atoms/userButton/UserButton";
import { usePathname } from "next/navigation";
import PostLink from "../postLink/PostLink";
import Link from "next/link";
import SignInSignOutButton from "@/components/atoms/signInSignOutButton/SignInSignOutButton";
import { useRouter } from "next/navigation";
import useRenderHeader from "@/hooks/useRenderHeader/useRenderHeader";

function HeaderSection(): JSX.Element {
  const pathname = usePathname();
  const excludedPaths = ["/userPage", "/createPostPage"];
  const { accessToken, handleSignOut } = useRenderHeader();

  return (
    <>
      <div className={styles.container}>
        <div>
          <Logo type="header" />
        </div>
        <div className={styles.userContainer}>
          {!excludedPaths.includes(pathname) && accessToken && (
            <PostLink props="write" type="header" />
          )}
          {!accessToken && (
            <div className={styles.signUpContainer}>
              <Link href="signUpPage" className={styles.link}>
                회원가입
              </Link>
            </div>
          )}
          {!accessToken && <SignInSignOutButton type="Sign In" />}
          {accessToken && (
            <SignInSignOutButton
              type="Sign Out"
              onClick={() => handleSignOut()}
            />
          )}
          {accessToken && <UserButton />}
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
