"use client";

import Logo from "@/components/atoms/logo/Logo";
import styles from "./HeaderSection.module.scss";
import UserButton from "@/components/atoms/userButton/UserButton";
import { usePathname, useRouter } from "next/navigation";
import PostLink from "../postLink/PostLink";
import Link from "next/link";
import SignInSignOutButton from "@/components/atoms/signInSignOutButton/SignInSignOutButton";
import useSignOut from "@/hooks/useSignOut/useSignOut";

function HeaderSection(): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();
  const excludedPaths = ["/userPage", "/createPostPage"];
  const { handleSignOut } = useSignOut();

  let accessToken;
  if (typeof window !== "undefined") {
    accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      const protectedRoutes = [
        "/userPage",
        "/createPostPage",
        "/updateUserPage",
      ];
      if (protectedRoutes.includes(pathname)) {
        router.replace("/");
      }
    }
  }

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
            <Link href="signUpPage" className={styles.signUpLink}>
              회원가입
            </Link>
          )}
          {accessToken && pathname === "/userPage" && (
            <Link href="/updateUserPage" className={styles.updateUserLink}>
              회원 수정
            </Link>
          )}
          {!accessToken && <SignInSignOutButton type="Sign In" />}
          {accessToken && (
            <SignInSignOutButton
              type="Sign Out"
              onClick={() => handleSignOut()}
            />
          )}
          {accessToken && pathname !== "/userPage" && <UserButton />}
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
