import Copyright from "@/components/atoms/copyright/Copyright";
import styles from "./Footer.module.scss";
import Logo from "@/components/atoms/logo/Logo";

function Footer(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.footerText}>
        <div className={styles.logo}>
          <Logo type="footer" />
        </div>
        <Copyright />
      </div>
    </div>
  );
}

export default Footer;
