import styles from "./page.module.css";

import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import UpdateUserTemplate from "@/components/templates/updateUserTemplate/UpdateUserTemplate";

function UpdateUserPage(): JSX.Element {
  return (
    <>
      <div className="body">
        <div className={styles.mainContainer}>
          <Header />
          <UpdateUserTemplate />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default UpdateUserPage;
