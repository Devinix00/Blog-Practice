"use client";

import Logo from "@/components/atoms/logo/Logo";
import styles from "./HeaderSection.module.scss";
import UserButton from "@/components/atoms/userButton/UserButton";
import { usePathname, useRouter } from "next/navigation";
import PostLink from "../postLink/PostLink";
import Link from "next/link";
import SignInSignOutButton from "@/components/atoms/signInSignOutButton/SignInSignOutButton";
import useSignOut from "@/hooks/useSignOut/useSignOut";
import useIsLoggedinStore from "@/stores/useIsLoggedinStore/useIsLoggedinStore";
import { useEffect, useState } from "react";

function HeaderSection(): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();
  const excludedPaths = ["/userPage", "/createPostPage"];
  const { handleSignOut } = useSignOut();
  const { isLoggedIn } = useIsLoggedinStore();

  useEffect(() => {
    if (!isLoggedIn) {
      const protectedRoutes = [
        "/userPage",
        "/createPostPage",
        "/updateUserPage",
      ];
      if (protectedRoutes.includes(pathname)) {
        router.replace("/");
      }
    }
  }, [isLoggedIn, pathname]);

  return (
    <>
      <div className={styles.container}>
        <div>
          <Logo type="header" />
        </div>
        <div className={styles.userContainer}>
          {!excludedPaths.includes(pathname) && isLoggedIn && (
            <PostLink props="write" type="header" />
          )}
          {!isLoggedIn && (
            <Link href="signUpPage" className={styles.signUpLink}>
              회원가입
            </Link>
          )}
          {isLoggedIn && pathname === "/userPage" && (
            <Link href="/updateUserPage" className={styles.updateUserLink}>
              회원 수정
            </Link>
          )}
          {!isLoggedIn && <SignInSignOutButton type="Sign In" />}
          {isLoggedIn && (
            <SignInSignOutButton
              type="Sign Out"
              onClick={() => handleSignOut()}
            />
          )}
          {isLoggedIn && pathname !== "/userPage" && <UserButton />}
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
