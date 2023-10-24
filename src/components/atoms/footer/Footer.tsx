import Logo from "../logo/Logo";
import styles from "./Footer.module.scss";

function Footer(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.footerText}>
          <div className={styles.logo}>
            <Logo type="footer" />
          </div>
          <div>Copyright © Blog Corp. All Rights Reserved.</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
