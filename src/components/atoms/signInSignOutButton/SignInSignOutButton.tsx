import Link from "next/link";
import styles from "./SignInSignOutButton.module.scss";

interface IProps {
  type: string;
  onClick?: () => void;
}

function SignInSignOutButton({ type, onClick }: IProps): JSX.Element {
  const typeCheckRendering = () => {
    if (type === "Sign In") {
      return (
        <Link href="/signInPage" className={styles.link}>
          {type}
        </Link>
      );
    } else if (type === "Sign Out") {
      return (
        <button className={styles.link} onClick={onClick}>
          {type}
        </button>
      );
    }
  };
  return <>{typeCheckRendering()}</>;
}

export default SignInSignOutButton;
