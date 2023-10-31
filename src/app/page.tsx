import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import HomeTemplate from "@/components/templates/homeTemplate/HomeTemplate";

export default function Home() {
  return (
    <>
      <div className="body">
        <div className="mainContainer">
          <Header />
          <HomeTemplate />
        </div>
        <Footer />
      </div>
    </>
  );
}
