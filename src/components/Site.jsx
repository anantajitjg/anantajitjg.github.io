import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

const Site = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Site;