import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
