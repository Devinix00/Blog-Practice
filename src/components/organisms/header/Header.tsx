import styles from "./Header.module.scss";
import HeaderSection from "@/components/molecules/headerSection/HeaderSection";

function Header(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <HeaderSection />
      </div>
    </>
  );
}

export default Header;
