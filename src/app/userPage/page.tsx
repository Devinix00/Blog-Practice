import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import UserTemplate from "@/components/templates/userTemplate/UserTemplate";

function userPage(): JSX.Element {
  return (
    <div className="body">
      <div className="mainContainer">
        <Header />
        <UserTemplate />
      </div>
      <Footer />
    </div>
  );
}

export default userPage;
